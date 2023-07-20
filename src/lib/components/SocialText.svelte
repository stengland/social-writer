<script>
  export let post;
  export let social;
  import { contacts } from '../stores';

  function mentionReplace(text, social) {
    let newText = text;
    for (let [key, contact] of Object.entries($contacts)) {
      const newAddress = contact[social];
      if (newAddress) {
        newText = newText.replace(key, newAddress);
      }
    };
    return newText;
  }
</script>


<p>{mentionReplace(post, social)}</p>
