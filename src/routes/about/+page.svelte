<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
  <title>Über uns - Café Kissler Friedberg</title>
  <meta name="description" content="Erfahren Sie mehr über die Geschichte des Café Kissler, unsere Philosophie und das Team, das jeden Tag mit Leidenschaft für Sie backt." />
  <meta property="og:title" content="Über uns - Café Kissler Friedberg" />
  <meta property="og:description" content="Erfahren Sie mehr über die Geschichte des Café Kissler, unsere Philosophie und das Team." />
  <meta property="og:image" content="https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
</svelte:head>

<PageHeader 
  title="Über uns"  
  subtitle="Tradition & Handwerk"
  bgImage="https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
/>

<div class="container mx-auto p-4">
  <div class="max-w-4xl mx-auto">

    <div class="mb-12">
      <img src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cafe Kissler Team" class="w-full h-64 object-cover rounded-xl shadow-lg mb-8" />
      
      <h2 class="text-2xl font-bold mb-4 text-primary">Tradition seit Generationen</h2>
      <p class="text-lg mb-4">
        Das Café Kissler ist mehr als nur ein Café – es ist ein Stück Friedberger Geschichte. Seit vielen Jahren stehen wir für handwerkliche Backkunst, erstklassige Konditoreiwaren und eine Atmosphäre, in der man sich sofort zuhause fühlt.
      </p>
      <p class="text-lg">
        Unser Familienbetrieb legt größten Wert auf Qualität. Wir verwenden regionale Zutaten, verzichten auf unnötige Zusatzstoffe und geben unseren Teigen die Zeit, die sie brauchen, um ihren vollen Geschmack zu entfalten.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
      <div>
        <h2 class="text-2xl font-bold mb-4 text-primary">Unsere Bäckerei</h2>
        <p class="mb-4">
          In unserer Backstube beginnt der Tag früh. Unsere Bäckermeister kneten, formen und backen täglich frisches Brot, Brötchen und Brezeln.
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li>Täglich frische Sauerteigbrote</li>
          <li>Knusprige Brötchen in vielen Variationen</li>
          <li>Herzhafte Snacks für die Pause</li>
        </ul>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bäckerei" class="rounded-xl shadow-lg" />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
      <div class="order-2 md:order-1">
        <img src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sondertorten" class="rounded-xl shadow-lg" />
      </div>
      <div class="order-1 md:order-2">
        <h2 class="text-2xl font-bold mb-4 text-primary">Sondertorten & Patisserie</h2>
        <p class="mb-4">
          Ob Hochzeit, Geburtstag oder Firmenjubiläum – unsere Konditoren zaubern Tortenträume nach Ihren Wünschen. Von der klassischen Sahnetorte bis hin zu modernen Motivtorten ist alles möglich.
        </p>
        <p>
          Besuchen Sie uns und lassen Sie sich beraten. Wir machen Ihren besonderen Tag noch süßer!
        </p>
      </div>
    </div>

  </div>
</div>