<div
  class="flex flex-col gap-3 font-geist-sans p-6 rounded-xl border bg-card text-card-foreground shadow w-72"
>
  <h3 class="font-geist-sans font-semibold text-2xl">Login</h3>
  <p class="text-sm">Enter your details below to log in</p>
  <div id="email-field-container" class="grid gap-2">
    <p class="font-medium text-sm">Email</p>
    <input
      type="email"
      class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      id="email"
      placeholder="email@example.com"
      aria-label="Email"
    />
  </div>
  <div id="password-field-continer" class="grid gap-2">
    <p class="font-medium text-sm">Password</p>
    <input
      type="password"
      class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      id="password"
      aria-label="Password"
    />
  </div>
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 w-full bg-slate-800 text-slate-100"
    >Login</button
  >
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap");
</style>
