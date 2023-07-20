<script>
  import {Card, Field} from 'svelte-chota';
  import { contacts } from '../stores';
  import ContactsTable from './ContactsTable.svelte';
  import { parse } from 'csv-parse/browser/esm/sync';

	let files;

	$: if (files) {
    const file = files.item(0);
		file.text().then((text) => {
			const rows = parse(text, {
			  columns: true,
			  skip_empty_lines: true
			});
			let newContacts = {};
			rows.forEach((row) => {
				newContacts[row.fediverse] = row;
			});
			$contacts = newContacts;
		});
	}
</script>

<Card>
<h2 slot="header">Contacts</h2>

<ContactsTable/>

<Field label="Upload csv:">
<input
	accept="text/csv"
	bind:files
	type="file"
/>
</Field>
</Card>


