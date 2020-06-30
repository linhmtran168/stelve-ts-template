<script lang="ts">
  import timer from './timer';
  import Header from './Header.svelte';

  export let name: string;

  let a = 42;
  let doubled: number;
  let doubleTimer: number;
  $: doubled = a * 2;
  $: doubleTimer = $timer * 2;
</script>

<main>
  <Header />
  <h1>Hello {name}!</h1>
  <h2>Count is {$timer}</h2>
  <p>Test {doubled}</p>
  <p>Test {doubleTimer}</p>
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>