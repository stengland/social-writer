import { writable } from 'svelte/store';

const defaultContacts = JSON.parse(document.getElementById("socials").textContent);

const stored = JSON.parse(localStorage.contacts || null);
export const contacts = writable(stored || defaultContacts);
contacts.subscribe((value) => localStorage.contacts = JSON.stringify(value));

