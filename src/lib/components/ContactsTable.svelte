<script>
  export let contacts;
</script>

<table>
  <thead>
  <tr>
  <th>Key</th>
  <th>Twitter</th>
  <th>Facebook</th>
  <th>Instagram</th>
  <th>Fediverse</th>
  </tr>
  </thead>
  <tbody>
{#each contacts as contact}
  <tr>
<td>{contact.key}</td>
<td>{contact.twitter}</td>
<td>{contact.facebook}</td>
<td>{contact.instagram}</td>
<td>{contact.fediverse}</td>
  </tr>
{/each}
  </tbody>
</table>

