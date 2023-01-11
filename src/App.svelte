<script>
  import 'chota';
  import {Container, Card, Input} from 'svelte-chota';
  import SocialText from './lib/components/SocialText.svelte';
  import Contacts from './lib/components/Contacts.svelte';
	let post = '';
</script>

<style>
  :global(.card) {
    margin-bottom: 2rem;
  }
</style>

<Container>

<h1>Social Text Generator</h1>

<Card>
  <h2 slot="header">Create Post</h2>
  <Input textarea bind:value={post} placeholder="enter your post" />
</Card>
<Card>
  <h3 slot="header">Twitter</h3>
  <SocialText {post} social='twitter' />
</Card>
<Card>
  <h3 slot="header">Instagram</h3>
  <SocialText {post} social='instagram' />
</Card>
<Card>
  <h3 slot="header">Fediverse</h3>
  <SocialText {post} social='fediverse' />
</Card>
<Card>
  <h3 slot="header">Facebook</h3>
  <SocialText {post} social='facebook' />
</Card>


<Contacts />

</Container>
