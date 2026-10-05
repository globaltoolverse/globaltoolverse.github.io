export default {
  async fetch(request, env) {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + env.GROQ_KEY,
        'Content-Type': 'application/json'
      },
      body: request.body
    });
    const out = new Response(res.body, res);
    out.headers.set('Access-Control-Allow-Origin', '*');
    return out;
  }
};
