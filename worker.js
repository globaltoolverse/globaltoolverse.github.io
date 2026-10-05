export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors });
    }
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + env.GROQ_KEY,
        'Content-Type': 'application/json'
      },
      body: request.body
    });
    const out = new Response(res.body, res);
    Object.keys(cors).forEach(k => out.headers.set(k, cors[k]));
    return out;
  }
};
