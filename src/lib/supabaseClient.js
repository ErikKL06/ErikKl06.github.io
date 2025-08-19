// filepath: /home/Erik/egenapp/frontend/src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://amrqwjuphpfidqgusjzs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtcnF3anVwaHBmaWRxZ3VzanpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzU5NjcsImV4cCI6MjA3MTExMTk2N30.l7kJc36a2LbI22-PmFxhAKVXgiP7Oy4jSfYnXmOsDBs';

export const supabase = createClient(supabaseUrl, supabaseKey);