<script>
  export let post;
  export let social;
  import { contacts } from '../stores';

  function mentionReplace(text, social) {
    let newText = text;
    $contacts.forEach((contact) => {
        const newAddress = contact[social];
        if (newAddress) {
          newText = newText.replace(contact.key, newAddress);
        }
      }
    );
    return newText;
  }
</script>


<p>{mentionReplace(post, social)}</p>
