import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    
    if (!fs.existsSync(filePath)) {
      return new NextResponse("Resume not found. Please add resume.pdf to the public folder.", { 
        status: 404,
        headers: { "Content-Type": "text/plain" }
      });
    }

    const fileBuffer = fs.readFileSync(filePath);
    
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Aditya_Chaturvedi_Resume.pdf",
        "Cache-Control": "no-cache",
      },
    });
  } catch {
    return new NextResponse("Error reading resume file.", { status: 500 });
  }
}
