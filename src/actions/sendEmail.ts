"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const serviceId: string = process.env.SERVICE_ID!;
const templateId: string = process.env.TEMPLATE_ID!;
const emailJsPublicKey: string = process.env.EMAILJS_PUBLIC_KEY!;
const emailJsUrl: string = process.env.EMAILJS_URL!;
const emailJsPrivateKey: string = process.env.EMAILJS_PRIVATE_KEY!;

const contactSchema = z.object({
  from_name: z.string(),
  from_email: z.string().email(),
  message: z.string(),
});

export async function sendEmail(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  let parsed;

  try {
    parsed = contactSchema.parse(values);
  } catch (error) {
    return console.error(error);
  }
  var data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: emailJsPublicKey,
    accessToken: emailJsPrivateKey,
    template_params: {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      message: formData.get("message"),
    },
  };

  try {
    const response = await fetch(emailJsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include other headers as required by the API
        // 'Authorization': 'Bearer <Your_Token_Here>',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // If the response is not 2xx, it throws an error
      throw new Error(`Failed to submit post: ${response.status}`);
    }

    redirect(`/thank-you`);
  } catch (error) {
    console.log("FAILED...", error);
    throw error; // Re-throw the error for the caller to handle
  }
}
