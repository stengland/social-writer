<script>
  import {Card, Field, Input} from 'svelte-chota';
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
			$contacts = rows;
		});
	}
</script>

<Card>
<h2 slot="header">Contacts</h2>

<ContactsTable contacts={$contacts} />

<Field label="Upload csv:">
<Input
	accept="text/csv"
	bind:files
	type="file"
/>
</Field>
</Card>


