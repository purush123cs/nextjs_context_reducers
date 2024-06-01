type RegistrationData = {
    firstName?: string,
    lastName?: string,
    email?: string,
}

export async function POST(request: Request) {
    const requestData: RegistrationData = await request.json();
    console.log('data in server component to be viewed in console where npm run dev was issued: ', requestData);

    const { firstName, lastName, email } = requestData;

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName, lastName, email
        }),
      });
      const data = await res.json();
   
    return Response.json({ data })
  }