export type MenuItem = {
  name: string
  description: string
  price: string
  category: 'Starters' | 'Signature Steaks' | 'Mains' | 'Sides' | 'Desserts' | 'Zero-Proof'
  tag?: string
}

export type GalleryItem = {
  src: string
  alt: string
  label: string
  orientation: 'portrait' | 'landscape' | 'square'
}

export const restaurant = {
  name: 'Ember & Ash',
  descriptor: 'Modern Fire-Kissed Steakhouse',
  address: '17 Ember Lane, Bukit Bintang, Kuala Lumpur — fictional address',
  phone: '+60 3-0000 0000',
  email: 'reservations@emberandash.example',
  hours: [
    ['Tuesday–Thursday', '5:30 PM–11:00 PM'],
    ['Friday–Saturday', '5:30 PM–12:00 AM'],
    ['Sunday', '5:30 PM–10:30 PM'],
    ['Monday', 'Closed'],
  ],
}

export const images = {
  hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=88',
  steak: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=86',
  dining: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=86',
  chef: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=86',
  plate: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=86',
  table: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=86',
  grill: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1600&q=86',
  interior: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1600&q=86',
}

export const menuItems: MenuItem[] = [
  { name: 'Charred Bone Marrow', description: 'Sourdough, smoked shallot jam, parsley salt.', price: 'RM 46', category: 'Starters', tag: 'House signature' },
  { name: 'Coal-Roasted Beet', description: 'Whipped chèvre, pistachio, burnt citrus, dill oil.', price: 'RM 38', category: 'Starters', tag: 'Vegetarian' },
  { name: 'Dry-Aged Beef Tartare', description: 'Cured yolk, caper leaf, black garlic, rye crisp.', price: 'RM 58', category: 'Starters' },
  { name: 'Ember Prawns', description: 'Tiger prawns, fermented chilli butter, grilled lime.', price: 'RM 62', category: 'Starters' },
  { name: 'Black Angus Ribeye 350g', description: '45-day dry-aged, sea salt, ember jus.', price: 'RM 188', category: 'Signature Steaks', tag: 'Chef selection' },
  { name: 'Wagyu Striploin 250g', description: 'Marble score 6–7, smoked marrow glaze.', price: 'RM 248', category: 'Signature Steaks' },
  { name: 'Porterhouse for Two 900g', description: 'Dry-aged bone-in cut, tableside carving, three sauces.', price: 'RM 368', category: 'Signature Steaks', tag: 'For two' },
  { name: 'Tenderloin 220g', description: 'Grass-fed beef, confit garlic, peppercorn lacquer.', price: 'RM 168', category: 'Signature Steaks' },
  { name: 'Fire-Roasted Sea Bass', description: 'Brown butter dashi, charred greens, preserved lemon.', price: 'RM 98', category: 'Mains' },
  { name: 'Smoked Chicken Supreme', description: 'Roast onion, chicken jus, sage, crispy skin.', price: 'RM 82', category: 'Mains' },
  { name: 'King Oyster Steak', description: 'Miso glaze, smoked potato, mushroom reduction.', price: 'RM 68', category: 'Mains', tag: 'Vegetarian' },
  { name: 'Beef-Fat Potatoes', description: 'Crisp layers, rosemary, smoked salt.', price: 'RM 28', category: 'Sides' },
  { name: 'Embered Broccolini', description: 'Sesame, lemon, chilli crunch.', price: 'RM 26', category: 'Sides', tag: 'Vegan' },
  { name: 'Truffle Mac & Cheese', description: 'Aged cheddar, pecorino, black truffle crumb.', price: 'RM 34', category: 'Sides' },
  { name: 'Burnt Honey Cheesecake', description: 'Smoked honey, sea salt, cultured cream.', price: 'RM 38', category: 'Desserts' },
  { name: 'Dark Chocolate & Coal', description: '72% chocolate, malt, cocoa nib, vanilla smoke.', price: 'RM 42', category: 'Desserts' },
  { name: 'Ember Tonic', description: 'Charred grapefruit, rosemary, tonic, smoked salt.', price: 'RM 24', category: 'Zero-Proof' },
  { name: 'Black Tea Highball', description: 'Cold-brew tea, calamansi, ginger, soda.', price: 'RM 22', category: 'Zero-Proof' },
]

export const galleryItems: GalleryItem[] = [
  { src: images.hero, alt: 'Moody contemporary restaurant dining room with warm pendant lights', label: 'The room', orientation: 'landscape' },
  { src: images.steak, alt: 'Fire-seared steak plated with herbs', label: 'The cut', orientation: 'portrait' },
  { src: images.chef, alt: 'Chef working carefully in a professional kitchen', label: 'The craft', orientation: 'portrait' },
  { src: images.plate, alt: 'Refined restaurant plate prepared for service', label: 'The detail', orientation: 'landscape' },
  { src: images.table, alt: 'Shared dining table filled with carefully prepared dishes', label: 'The table', orientation: 'landscape' },
  { src: images.grill, alt: 'Steak cooking over high heat on a grill', label: 'The fire', orientation: 'square' },
  { src: images.dining, alt: 'Modern restaurant interior with atmospheric lighting', label: 'After dark', orientation: 'portrait' },
  { src: images.interior, alt: 'Restaurant seating arranged for evening service', label: 'The evening', orientation: 'landscape' },
]

export const facts = [
  ['45', 'days minimum dry-age'],
  ['900°C', 'peak ember heat'],
  ['12', 'seats at the fire counter'],
  ['1', 'fictional restaurant'],
]
