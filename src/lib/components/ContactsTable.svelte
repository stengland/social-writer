<script>
  import { contacts } from '../stores';
	let table = [];

  const updateTable = (contacts) => {
    table = [];
    for (let [key, contact] of Object.entries(contacts)) {
      contact.key = key;
      table.push(contact)
    };
  }

  $: updateTable($contacts);

</script>

<table>
  <thead>
  <tr>
  <th>Fediverse</th>
  <th>Twitter</th>
  <th>Facebook</th>
  <th>Instagram</th>
  </tr>
  </thead>
  <tbody>
{#each table as contact}
  <tr>
<td>{contact.key}</td>
<td>{contact.twitter}</td>
<td>{contact.facebook}</td>
<td>{contact.instagram}</td>
  </tr>
{/each}
  </tbody>
</table>

