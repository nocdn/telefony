<script>
  import PhoneCard from "./components/PhoneCard.svelte";
  import LoginCard from "./components/LoginCard.svelte";

  let phonesVisible = false;
</script>

<main class="w-full h-full grid place-content-center">
  {#if phonesVisible}
    <div class="flex flex-col gap-4 mt-20">
      <PhoneCard name="Mama" number="+44 7941 430438" pfpcolor="#EEF8FF" />
      <PhoneCard name="Tata" number="+44 7460 223422" pfpcolor="#EDF3FF" />
      <PhoneCard name="Bartek" number="+44 7419 7405787" pfpcolor="#F9F5FE" />
      <PhoneCard name="Piotrek" number="+44 7421 800644" pfpcolor="#ECFBF4" />
      <PhoneCard name="Aga" number="+44 7869 376262" pfpcolor="#FDF2FB" />
    </div>
  {:else}
    <LoginCard />
  {/if}

  <div
    on:click={() => {
      if (phonesVisible === false) {
        phonesVisible = true;
      } else {
        phonesVisible = false;
      }
    }}
    class="absolute bottom-0 right-0 z-3 w-14 h-36 translate-y-16"
  ></div>
</main>
