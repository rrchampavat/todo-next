export const GET = (req: Request) => {
  console.log("method", req.method);
  return new Response("Hello, there!");
};
