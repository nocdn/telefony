<script>
  export let number = "07419740587";
  export let name = "John";
  export let primary = "#fff"; // Provide default color
  export let secondary = "#000"; // Provide default color
  export let pfpcolor = "#000"; // Provide default color

  function copyToClipboard() {
    navigator.clipboard.writeText(number);
    tempText = false;
    setTimeout(() => {
      tempText = true;
    }, 1000);
  }

  let tempText = true;
</script>

<div
  class="flex gap-5 items-center p-6 rounded-xl border text-card-foreground shadow"
  style="background-color: {primary};"
>
  <div
    style="background-color: {pfpcolor};"
    id="profile-picture"
    class="h-10 w-10 rounded-full bg-slate-300"
  ></div>
  <div id="details-container" class="flex flex-col gap-2">
    <p class="font-bold text-md" style="color: {secondary}">
      {name}
    </p>
    <div class="flex gap-6 items-center">
      <a
        href="tel:{number}"
        class="text-sm font-mono bg-slate-50 p-2 border-dashed border-2 rounded-lg"
      >
        {#if tempText}
          {number}
        {:else}
          Copied!
        {/if}
      </a>
      {#if tempText}
        <svg
          on:click={copyToClipboard}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          />
        </svg>
      {/if}
    </div>
  </div>
</div>
