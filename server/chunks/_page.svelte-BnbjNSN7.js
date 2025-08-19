import { a as attr } from './attributes-YVTFWYF4.js';
import { t as push, v as pop } from './index-B1kI8_bZ.js';
import './supabaseClient-CglB0G-j.js';
import './utils-FiC4zhrQ.js';
import './escaping-CqgfEcN3.js';
import '@supabase/supabase-js';

function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  $$payload.out.push(`<main><h1>Login</h1> <form><label>Email: <input type="email"${attr("value", email)} required/></label> <br/> <label>Password: <input type="password"${attr("value", password)} required/></label> <br/> <button type="submit">Login</button></form> <p>Don't have an account? <a href="/register">Register here</a>.</p></main>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BnbjNSN7.js.map
