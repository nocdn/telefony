<script>
  export let number = "07419740587";
  export let name = "John";
  export let primary = "#fff"; // Provide default color
  export let secondary = "#000"; // Provide default color
  export let pfpcolor = "#000"; // Provide default color
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
    <p
      class="text-sm font-mono bg-slate-50 p-2 border-dashed border-2 rounded-lg"
    >
      {number}
    </p>
  </div>
</div>
