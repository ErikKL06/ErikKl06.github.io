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
  let confirmPassword = "";
  $$payload.out.push(`<main><h1>Register</h1> <form><label>Email: <input type="email"${attr("value", email)} required/></label> <br/> <label>Password: <input type="password"${attr("value", password)} required/></label> <br/> <label>Confirm Password: <input type="password"${attr("value", confirmPassword)} required/></label> <br/> <button type="submit">Register</button></form> <p>Already have an account? <a href="/login">Login here</a>.</p></main>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-sHG9I7ta.js.map
