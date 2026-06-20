#!/usr/bin/env python3
"""Generate a clean, ATS-friendly single-page resume PDF for Sonu Kumar.

Produces a valid PDF (correct xref offsets) using only the standard library,
laid out with the built-in Helvetica fonts so any ATS can parse the text.
"""
import os

WIDTH, HEIGHT = 595, 842  # A4 in points
LEFT = 54
RIGHT = WIDTH - 54


def esc(s: str) -> str:
    return s.replace("\\", r"\\").replace("(", r"\(").replace(")", r"\)")


class Page:
    def __init__(self):
        self.ops = []
        self.y = HEIGHT - 56

    def text(self, s, size=10, font="F1", x=LEFT, gap=14, color=None):
        if color:
            self.ops.append(f"{color[0]} {color[1]} {color[2]} rg")
        self.ops.append("BT")
        self.ops.append(f"/{font} {size} Tf")
        self.ops.append(f"1 0 0 1 {x} {self.y} Tm")
        self.ops.append(f"({esc(s)}) Tj")
        self.ops.append("ET")
        if color:
            self.ops.append("0 0 0 rg")
        self.y -= gap

    def heading(self, s):
        self.y -= 6
        self.text(s, size=11.5, font="F2", color=(0.04, 0.45, 0.82))
        self.ops.append(f"{LEFT} {self.y + 6} m {RIGHT} {self.y + 6} l 0.7 0.78 0.9 RG 0.8 w S")
        self.y -= 4

    def space(self, h=6):
        self.y -= h

    def stream(self):
        return "\n".join(self.ops)


p = Page()

# Header
p.text("SONU KUMAR", size=20, font="F2", gap=20)
p.text("Data Analyst  |  Computer Science Engineer", size=11, font="F1", gap=15, color=(0.3, 0.3, 0.3))
p.text("+91 94380 84970  -  sonudeo346@gmail.com", size=9.5, gap=12, color=(0.3, 0.3, 0.3))
p.text("github.com/SonuDeo  -  linkedin.com/in/sonu-45-kumar", size=9.5, gap=10, color=(0.3, 0.3, 0.3))

p.heading("SUMMARY")
for line in [
    "Data Analytics fresher with hands-on experience in Python, SQL, Power BI, Tableau and",
    "data visualization. Skilled in transforming raw data into actionable insights, building",
    "dashboards, automating workflows and supporting data-driven decision-making.",
]:
    p.text(line, gap=12)

p.heading("EDUCATION")
p.text("B.Tech in Computer Science & Engineering", font="F2", gap=12)
p.text("Indo Global College, Abhipur - I.K. Gujral Punjab Technical University        2022 - 2026", gap=14, color=(0.3, 0.3, 0.3))
p.text("Intermediate (12th) - B.D. College, Patna (BSEB)                              2021", gap=12, color=(0.3, 0.3, 0.3))
p.text("Matriculation (10th) - B.P.L Residential Public School, Patna (CBSE)          2019", gap=12, color=(0.3, 0.3, 0.3))

p.heading("SKILLS")
for line in [
    "Programming: Python, SQL    Data Analysis: Pandas, NumPy, Power BI, Tableau, Excel",
    "Databases: MySQL, Airtable    Automation: n8n, Make.com, REST APIs",
    "Core CS: DSA, DBMS, OOP, Operating Systems    Tools: Git, GitHub, Claude, Jupyter",
]:
    p.text(line, gap=12)

p.heading("PROJECTS")
p.text("Autonomous Data Enrichment & AI Qualification Pipeline                        2026", font="F2", gap=12)
for line in [
    "- Engineered an automated real-time data workflow using Make.com and Airtable.",
    "- Built an OpenAI-powered pipeline to scrape, parse and structure research into JSON.",
    "- Integrated Vapi voice AI via REST APIs for outreach, transcripts and sentiment.",
]:
    p.text(line, gap=12)
p.space(2)
p.text("Power BI - Data Professional Survey Dashboard                                 2026", font="F2", gap=12)
for line in [
    "- Built an interactive dashboard analysing 1,000+ survey responses.",
    "- Cleaned and modelled data with Power Query; created KPI metrics using DAX.",
    "- Generated insights on salary trends, job roles and work-life balance.",
]:
    p.text(line, gap=12)

p.heading("EXPERIENCE")
p.text("Data Analytics Virtual Experience Program - Deloitte (Forage)                 2026", font="F2", gap=12)
for line in [
    "- Completed a simulation involving data analysis and forensic technology tasks.",
    "- Examined datasets to identify anomalies, trends and business patterns.",
    "- Developed visual reports and dashboards for stakeholder communication.",
]:
    p.text(line, gap=12)

p.heading("CERTIFICATIONS")
for line in [
    "- Data Analytics Job Simulation - Deloitte (Forage), 2026",
    "- SOAR: AI to be Aware - Microsoft (Skill India / NCVET), 2026",
    "- Claude 101 - Anthropic, 2026",
]:
    p.text(line, gap=12)

content = p.stream().encode("latin-1", "replace")

# Assemble PDF objects
objects = []
objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
objects.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
objects.append(
    f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {WIDTH} {HEIGHT}] "
    f"/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>".encode()
)
objects.append(b"<< /Length " + str(len(content)).encode() + b" >>\nstream\n" + content + b"\nendstream")
objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

pdf = b"%PDF-1.4\n"
offsets = []
for i, obj in enumerate(objects, start=1):
    offsets.append(len(pdf))
    pdf += f"{i} 0 obj\n".encode() + obj + b"\nendobj\n"

xref_pos = len(pdf)
n = len(objects) + 1
pdf += f"xref\n0 {n}\n".encode()
pdf += b"0000000000 65535 f \n"
for off in offsets:
    pdf += f"{off:010d} 00000 n \n".encode()
pdf += (
    f"trailer\n<< /Size {n} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode()
)

out = os.path.join(os.path.dirname(__file__), "..", "public", "resume", "Sonu_Kumar_Resume.pdf")
out = os.path.abspath(out)
os.makedirs(os.path.dirname(out), exist_ok=True)
with open(out, "wb") as f:
    f.write(pdf)
print("Wrote", out, len(pdf), "bytes")
