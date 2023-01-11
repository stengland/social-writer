import { writable } from 'svelte/store';

const defaultContacts = [
  {
    key: '@dave',
    twitter: '@davebs',
    facebook: '@davefb',
    fediverse: '@dave@thebristol.soclal'
  },
  {
    key: '@steve',
    twitter: '@StephenEngland',
    facebook: '@stephenjamesengland',
    fediverse: '@stengland@thebristol.soclal'
  }
];

const stored = JSON.parse(localStorage.contacts || null);
export const contacts = writable(stored || defaultContacts);
contacts.subscribe((value) => localStorage.contacts = JSON.stringify(value));

