<script lang="ts">
  let count = 0;
  let text = "";
</script>

<div class="p-6 h-full flex flex-col items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
  <h1 class="text-2xl font-bold mb-4">Hello from Greetings!</h1>
  <p class="mb-6 opacity-80">This is your new sandboxed extension view.</p>
  
  <input 
    type="text" 
    bind:value={text} 
    placeholder="Type here to test focus..."
    class="mb-6 w-64 p-3 rounded bg-[var(--bg-secondary)] border border-[var(--separator)] outline-none focus:border-[var(--accent-primary)] transition"
  />

  <button 
    on:click={() => count++}
    class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition"
  >
    Clicked {count} times
  </button>
</div>
