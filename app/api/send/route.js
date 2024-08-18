import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
    try {
        const { email, subject, message } = await req.json();

        if (!email || !subject || !message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        const response = await resend.emails.send({
            from: "Adrian Hernandez <sender@adr577.com>",
            to: ['adrian003hernandez@gmail.com', email],
            subject: subject,
            reply_to: email,
            react: (
                <>
                    <h2>Subject: {subject}</h2>
                    <p className='font-bold'>Thank you for contacting me!</p>
                    <p className='font-bold'>New message submitted!</p>
                    <p>I will respond as soon as I can!</p>
                    <p className='text-md text-gray-900'>website: adr577.com</p>
                    <p>Your message: {message}</p>
                </>
            ),
        });

        if (response.error) {
            return new Response(JSON.stringify({ error: response.error }), { status: 500 });
        }

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error('Server Error:', error); // Log the error for debugging
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
