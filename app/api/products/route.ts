import { NextResponse } from "next/server";
import { categories, subcategories, products } from "@/src/data/catalog";

export async function GET() {
  return NextResponse.json({ categories, subcategories, products });
}
