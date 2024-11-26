import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template Details",
};

interface PageProps {
  params: Promise<{ templateId: string }>;
}

export default async function TemplatePage({ params }: PageProps) {
  const { templateId } = await params;
  return <div>TemplatePage: {templateId}</div>;
}
