// ===== SKATES (X-Raypad) =====
import jadeAirImg from '../assets/images/Productos/x-raypad/JadeAir.jpeg'
import obsidianImg from '../assets/images/Productos/x-raypad/Obsidian.jpeg'
import obsidianAirImg from '../assets/images/Productos/x-raypad/ObsidianAir.jpeg'
import obsidianProAirImg from '../assets/images/Productos/x-raypad/ObsidianProAir.jpeg'
import u9AirImg from '../assets/images/Productos/x-raypad/U9-Air.jpeg'

// ===== MOUSE =====
import atkAirImg from '../assets/images/Productos/mice/atk_air.png'
import atkZeroImg from '../assets/images/Productos/mice/atkZero.png'
import superStrikeImg from '../assets/images/Productos/mice/superStrike2logitech.png'
import beastXProImg from '../assets/images/Productos/mice/wlmouseBeastXPro.png'

// ===== SWITCHES DE MOUSE =====
import kailhImg from '../assets/images/Productos/switchesMouse/switchesKailh2.0.png'
import omronImg from '../assets/images/Productos/switchesMouse/switchesOmron.png'

// ===== SWITCHES MAGNÉTICOS =====
import gravastarImg from '../assets/images/Productos/switchesTeclado/switchesPurpleGravastar.png'
import wukongImg from '../assets/images/Productos/switchesTeclado/switchesWukongMagnetic.png'
import gateronImg from '../assets/images/Productos/switchesTeclado/switchGateronOrange.png'

// ===== ACCESORIOS =====
import gripBlancoImg from '../assets/images/Productos/accesorios/GripBlanco.png'
import gripNegroLisoImg from '../assets/images/Productos/accesorios/GripNegroLiso.png'
import gripNegroRugosoImg from '../assets/images/Productos/accesorios/gripNegroConRugocidad.png'
import gripRojoImg from '../assets/images/Productos/accesorios/GripRojo.png'

const PRODUCTS = [
  // ══════════════════════════════════════════
  // SKATES
  // ══════════════════════════════════════════
  {
    id: 'jade-air',
    name: 'Jade Air Dots',
    brand: 'X-Raypad',
    desc: 'PTFE de Alta Gama. Microcontrol y máxima performance.',
    tag: 'Speed / Control',
    tagColor: 'var(--neon-green)',
    glowClass: 'glow-card',
    priceColor: 'var(--primary-container)',
    prices: { '20 Pcs': 105.00, '40 Pcs': 180.00 },
    originalPrices: { '20 Pcs': 120.00, '40 Pcs': 220.00 },
    img: jadeAirImg,
    badges: ['Speed', 'Elite PTFE'],
    category: 'Skates',
    rating: 4.5,
    reviews: 48,
    specs: [
      { label: 'Material', value: 'PTFE de alta gama' },
      { label: 'Diametro', value: '6.0mm x 0.9mm' },
      { label: 'Velocidad', value: '7.5/10' },
      { label: 'Diseno', value: 'Maximo Rendimiento' },
    ],
    quantityLabels: { '20 Pcs': 'Starter Pack', '40 Pcs': 'Pro Pack' },
    features: [
      {
        icon: 'speed',
        title: 'Deslizamiento ultrasuave',
        description: 'Los bordes pulidos reducen la fricción en casi cualquier superficie de alfombrilla para ratón, lo que garantiza una velocidad constante.',
      },
      {
        icon: 'precision_manufacturing',
        title: 'PTFE PREMIUM',
        description: 'Material de alta gama diseñado para ofrecer un equilibrio perfecto entre velocidad y control, ideal para jugadores que buscan un rendimiento superior.',
      },
      {
        icon: 'radar',
        title: 'Diseño de patrón de puntos',
        description: 'Compatibilidad universal con cualquier mouse para juegos con superficie de contacto personalizable.',
      },
    ],
  },
  {
    id: 'obsidian',
    name: 'Obsidian Dots',
    brand: 'X-Raypad',
    desc: 'PTFE Endurecido. Durabilidad extrema y control absoluto.',
    tag: 'Control',
    tagColor: 'var(--neon-red)',
    glowClass: 'glow-card-red',
    priceColor: 'var(--neon-red)',
    prices: { '20 Pcs': 105.00, '40 Pcs': 180.00 },
    originalPrices: { '20 Pcs': 120.00, '40 Pcs': 220.00 },
    img: obsidianImg,
    badges: ['Control', 'Hardened PTFE'],
    category: 'Skates',
    rating: 4.7,
    reviews: 36,
    specs: [
      { label: 'Material', value: 'PTFE de alta gama' },
      { label: 'Diametro', value: '6.0mm x 0.9mm' },
      { label: 'Velocidad', value: '5.5/10' },
      { label: 'Diseno', value: 'Maximo Rendimiento' },
    ],
    quantityLabels: { '20 Pcs': 'Starter Pack', '40 Pcs': 'Pro Pack' },
    features: [
      {
        icon: 'shield',
        title: 'Superficie endurecida',
        description: 'PTFE endurecido para máxima durabilidad sin sacrificar el rendimiento.',
      },
      {
        icon: 'precision_manufacturing',
        title: 'Control Preciso',
        description: 'Diseñado para jugadores que priorizan la precisión en cada movimiento.',
      },
      {
        icon: 'radar',
        title: 'Diseño de patrón de puntos',
        description: 'Ajuste universal para cualquier ratón de juego con área de contacto personalizable.',
      },
    ],
  },
  {
    id: 'obsidian-air',
    name: 'Obsidian Air Dots',
    brand: 'X-Raypad',
    desc: 'Deslizamiento ultra suave con control mejorado. Menos ruido.',
    tag: 'Control / Smooth',
    tagColor: 'var(--neon-purple)',
    glowClass: 'glow-card-purple',
    priceColor: 'var(--neon-purple)',
    prices: { '20 Pcs': 105.00, '40 Pcs': 180.00 },
    originalPrices: { '20 Pcs': 120.00, '40 Pcs': 230.00 },
    img: obsidianAirImg,
    badges: ['Smooth', 'Low Noise'],
    category: 'Skates',
    rating: 4.6,
    reviews: 29,
    specs: [
      { label: 'Material', value: 'PTFE Air Grade' },
      { label: 'Dot Size', value: '0.8mm x 0.9mm' },
      { label: 'Control', value: 'Control Suave' },
      { label: 'Sonido', value: 'Ultra Silencioso' },
    ],
    quantityLabels: { '20 Pcs': 'Starter Pack', '40 Pcs': 'Pro Pack' },
    features: [
      {
        icon: 'volume_off',
        title: 'Deslizamiento Silencioso',
        description: 'Reducción de ruido significativa para sesiones de juego más inmersivas.',
      },
      {
        icon: 'precision_manufacturing',
        title: 'Control Suave',
        description: 'Balance perfecto entre deslizamiento suave y control preciso.',
      },
      {
        icon: 'radar',
        title: 'Diseño de patrón de puntos',
        description: 'Ajuste universal para cualquier ratón de juego con área de contacto personalizable.',
      },
    ],
  },
  {
    id: 'obsidian-pro-air',
    name: 'Obsidian Pro Air Dots',
    brand: 'X-Raypad',
    desc: '6.5mm Small Dots. Precisión extrema para pro gamers.',
    tag: 'Pro Control',
    tagColor: 'var(--neon-orange)',
    glowClass: 'glow-card-orange',
    priceColor: 'var(--neon-orange)',
    prices: { '20 Pcs': 110.00, '40 Pcs': 190.00 },
    originalPrices: { '20 Pcs': 130.00, '40 Pcs': 240.00 },
    img: obsidianProAirImg,
    badges: ['Pro', '6.5mm Dots'],
    category: 'Skates',
    rating: 4.8,
    reviews: 52,
    specs: [
      { label: 'Material', value: 'PTFE Pro Grade' },
      { label: 'Dot Size', value: '6.5mm x 0.9mm' },
      { label: 'Control', value: 'Pro Precision' },
      { label: 'Diseñado', value: 'Competir Profesionalmente' },
    ],
    quantityLabels: { '20 Pcs': 'Starter Pack', '40 Pcs': 'Pro Pack' },
    features: [
      {
        icon: 'military_tech',
        title: 'Pro-Grade Precision',
        description: 'Dots de 6.5mm diseñados para la máxima precisión en competencia.',
      },
      {
        icon: 'precision_manufacturing',
        title: 'Competition PTFE',
        description: 'Material de grado profesional para el rendimiento más exigente.',
      },
      {
        icon: 'radar',
        title: 'Small Dot Pattern',
        description: 'Dots más pequeños para mayor contacto y control en superficies de juego.',
      },
    ],
  },
  {
    id: 'u9-air',
    name: 'U9-Air Dots',
    brand: 'X-Raypad',
    desc: 'Mayor durabilidad y resistencia al desgaste. Deslizamiento estable.',
    tag: 'Durability',
    tagColor: '#f97316',
    glowClass: 'glow-card-orange',
    priceColor: '#f97316',
    prices: { '20 Pcs': 120.00, '40 Pcs': 210.00 },
    originalPrices: { '20 Pcs': 150.00, '40 Pcs': 260.00 },
    img: u9AirImg,
    badges: ['Durable', 'Stable Glide'],
    category: 'Skates',
    rating: 4.4,
    reviews: 22,
    specs: [
      { label: 'Material', value: 'UHMWPE U9 Grade' },
      { label: 'Dots Size', value: '6.5mm x 0.8mm' },
      { label: 'Durability', value: 'Extra Resistente' },
      { label: 'Glide', value: 'Estable y silencioso' },
    ],
    quantityLabels: { '20 Pcs': 'Starter Pack', '40 Pcs': 'Pro Pack' },
    features: [
      {
        icon: 'verified',
        title: 'Maxima Durabilidad',
        description: 'Mayor resistencia al desgaste para sesiones de juego prolongadas.',
      },
      {
        icon: 'precision_manufacturing',
        title: 'Skates de UHMWPE',
        description: 'Deslizamiento consistente que se mantiene estable con el tiempo.',
      },
      {
        icon: 'radar',
        title: 'Diseño de patrón de puntos',
        description: 'Diseño de patrón de puntos para un ajuste universal en cualquier ratón de juego con área de contacto personalizable.',
      },
    ],
  },

  // ══════════════════════════════════════════
  // MOUSE
  // ══════════════════════════════════════════
  {
    id: 'atk-air',
    name: 'ATK Air',
    brand: 'ATK',
    desc: 'Mouse gaming inalámbrico ultraligero ~43g con sensor PAW3950 y polling rate de hasta 8000Hz.',
    tag: 'Wireless',
    tagColor: '#22d3ee',
    glowClass: 'glow-card-cyan',
    priceColor: '#22d3ee',
    prices: { '1 Unidad': 600.00 },
    originalPrices: { '1 Unidad': 720.00 },
    img: atkAirImg,
    badges: ['Ultralight', '8K Hz'],
    category: 'Mouse',
    rating: 4.6,
    reviews: 34,
    specs: [
      { label: 'Sensor', value: 'PixArt PAW3950' },
      { label: 'Peso', value: '~43g' },
      { label: 'Polling Rate', value: 'Hasta 8000Hz' },
      { label: 'Conectividad', value: 'Wireless / Wired' },
    ],
    quantityLabels: { '1 Unidad': 'Unidad' },
    features: [
      {
        icon: 'speed',
        title: 'Ultraligero',
        description: 'Con tan solo ~43g de peso, ofrece movimientos rápidos y sin fatiga durante largas sesiones de juego.',
      },
      {
        icon: 'sensors',
        title: 'Sensor PAW3950',
        description: 'Sensor de última generación con tracking preciso y consistente en cualquier superficie.',
      },
      {
        icon: 'bolt',
        title: '8000Hz Polling Rate',
        description: 'Hasta 8000Hz de tasa de sondeo para la menor latencia posible en competitivo.',
      },
    ],
  },
  {
    id: 'atk-zero',
    name: 'ATK Blazing Sky Zero',
    brand: 'ATK',
    desc: 'Mouse competitivo ultraligero ~39g con carcasa translúcida frosted y sensor PAW3950.',
    tag: 'Competitive',
    tagColor: '#22d3ee',
    glowClass: 'glow-card-cyan',
    priceColor: '#22d3ee',
    prices: { '1 Unidad': 800.00 },
    originalPrices: { '1 Unidad': 950.00 },
    img: atkZeroImg,
    badges: ['39g', 'Translúcido'],
    category: 'Mouse',
    rating: 4.8,
    reviews: 56,
    specs: [
      { label: 'Sensor', value: 'PixArt PAW3950' },
      { label: 'Peso', value: '~39g' },
      { label: 'Switches', value: 'ATK Custom Optical' },
      { label: 'Batería', value: '~200h a 1000Hz' },
    ],
    quantityLabels: { '1 Unidad': 'Unidad' },
    features: [
      {
        icon: 'fitness_center',
        title: 'Solo 39 gramos',
        description: 'Uno de los mouses más livianos del mercado. Carcasa de policarbonato translúcido frosted.',
      },
      {
        icon: 'flash_on',
        title: 'Switches Ópticos',
        description: 'Switches ópticos custom de ATK para clicks instantáneos sin debounce delay.',
      },
      {
        icon: 'battery_charging_full',
        title: 'Batería de larga duración',
        description: 'Hasta 200 horas de uso continuo a 1000Hz. Recarga rápida por USB-C.',
      },
    ],
  },
  {
    id: 'logitech-superstrike',
    name: 'G PRO X2 SuperStrike',
    brand: 'Logitech',
    desc: 'Mouse premium con sistema HITS de click analógico háptico revolucionario y sensor HERO 2.',
    tag: 'Premium',
    tagColor: '#a855f7',
    glowClass: 'glow-card-purple',
    priceColor: '#a855f7',
    prices: { '1 Unidad': 1800.00 },
    originalPrices: { '1 Unidad': 2100.00 },
    img: superStrikeImg,
    badges: ['HITS', 'HERO 2'],
    category: 'Mouse',
    rating: 4.9,
    reviews: 72,
    specs: [
      { label: 'Sensor', value: 'HERO 2' },
      { label: 'Click System', value: 'HITS Analógico' },
      { label: 'Latencia', value: '30ms más rápido' },
      { label: 'Software', value: 'Logitech G HUB' },
    ],
    quantityLabels: { '1 Unidad': 'Unidad' },
    features: [
      {
        icon: 'touch_app',
        title: 'Sistema HITS',
        description: 'Haptic Inductive Trigger System: click analógico con actuación ajustable, similar a rapid-trigger en teclados.',
      },
      {
        icon: 'vibration',
        title: 'Feedback Háptico',
        description: 'Motor háptico con intensidad ajustable desde G HUB para sentir cada click con precisión.',
      },
      {
        icon: 'timer',
        title: '30ms Más Rápido',
        description: 'Hasta 30ms menos de latencia en clicks comparado con mouses mecánicos tradicionales.',
      },
    ],
  },
  {
    id: 'wlmouse-beast-x-pro',
    name: 'Beast X Pro',
    brand: 'WLmouse',
    desc: 'Exoesqueleto de aleación de magnesio ~39g. Sensor PAW3950HS con 8K Hz wireless.',
    tag: 'Elite',
    tagColor: 'var(--neon-orange)',
    glowClass: 'glow-card-orange',
    priceColor: 'var(--neon-orange)',
    prices: { '1 Unidad': 1800.00 },
    originalPrices: { '1 Unidad': 2100.00 },
    img: beastXProImg,
    badges: ['Magnesium', '8K Hz'],
    category: 'Mouse',
    rating: 4.7,
    reviews: 45,
    specs: [
      { label: 'Material', value: 'Aleación de Magnesio' },
      { label: 'Sensor', value: 'PAW3950HS' },
      { label: 'Peso', value: '~39g' },
      { label: 'Polling Rate', value: '8K Hz Wireless' },
    ],
    quantityLabels: { '1 Unidad': 'Unidad' },
    features: [
      {
        icon: 'diamond',
        title: 'Exoesqueleto de Magnesio',
        description: 'Construcción premium en aleación de magnesio. Rígido, ligero y fresco al tacto.',
      },
      {
        icon: 'sensors',
        title: 'PAW3950HS',
        description: 'Sensor de grado competitivo con tracking perfecto a cualquier velocidad.',
      },
      {
        icon: 'bolt',
        title: '8K Hz Wireless',
        description: 'Polling rate de 8000Hz completamente inalámbrico para la máxima respuesta.',
      },
    ],
  },

  // ══════════════════════════════════════════
  // SWITCHES DE MOUSE
  // ══════════════════════════════════════════
  {
    id: 'kailh-gm-2',
    name: 'Kailh GM 2.0',
    brand: 'Kailh',
    desc: 'Switch Teal con click snappy y preciso. 20 millones de ciclos de durabilidad.',
    tag: 'Snappy Click',
    tagColor: '#2dd4bf',
    glowClass: 'glow-card-teal',
    priceColor: '#2dd4bf',
    prices: { '2 Pcs': 100.00 },
    originalPrices: { '2 Pcs': 130.00 },
    img: kailhImg,
    badges: ['20M Ciclos', 'Teal'],
    category: 'Switches de Mouse',
    rating: 4.5,
    reviews: 28,
    specs: [
      { label: 'Durabilidad', value: '20M ciclos' },
      { label: 'Fuerza', value: '65±15gf' },
      { label: 'Voltaje', value: '30V DC' },
      { label: 'Resistencia', value: '100mΩ' },
    ],
    quantityLabels: { '2 Pcs': 'Pack Básico' },
    features: [
      {
        icon: 'touch_app',
        title: 'Click Snappy',
        description: 'Click táctil definido con actuación corta, ideal para upgrades de mouses con clicks blandos.',
      },
      {
        icon: 'verified',
        title: '20 Millones de Ciclos',
        description: 'Durabilidad comprobada para uso intensivo en gaming competitivo.',
      },
      {
        icon: 'volume_down',
        title: 'Más Silencioso',
        description: 'Más silencioso que muchos switches estándar sin sacrificar la retroalimentación táctil.',
      },
    ],
  },
  {
    id: 'omron-d2f',
    name: 'Omron D2F-01F',
    brand: 'Omron',
    desc: 'Switch japonés gold standard con click crujiente y calidad superior. Made in Japan.',
    tag: 'Gold Standard',
    tagColor: '#2dd4bf',
    glowClass: 'glow-card-teal',
    priceColor: '#2dd4bf',
    prices: { '5 Pcs': 75.00, '10 Pcs': 150.00, '20 Pcs': 300.00 },
    originalPrices: { '5 Pcs': 95.00, '10 Pcs': 190.00, '20 Pcs': 380.00 },
    img: omronImg,
    badges: ['Made in Japan', 'Crispy'],
    category: 'Switches de Mouse',
    rating: 4.8,
    reviews: 63,
    specs: [
      { label: 'Origen', value: 'Made in Japan' },
      { label: 'Fuerza', value: '0.74N (75gf)' },
      { label: 'Voltaje', value: '30V DC' },
      { label: 'Tipo', value: 'Ultra-subminiatura' },
    ],
    quantityLabels: { '5 Pcs': 'Starter', '10 Pcs': 'Pro Pack', '20 Pcs': 'Mega Pack' },
    features: [
      {
        icon: 'workspace_premium',
        title: 'Made in Japan',
        description: 'Fabricación japonesa con tolerancias más estrictas y mejor sellado contra polvo y humedad.',
      },
      {
        icon: 'touch_app',
        title: 'Click Crujiente',
        description: 'Click ligero y crujiente de 0.74N, considerado el gold standard en calidad de click.',
      },
      {
        icon: 'shield',
        title: 'Calidad Superior',
        description: 'Calidad muy superior a los D2FC chinos. Mejor consistencia y durabilidad a largo plazo.',
      },
    ],
  },

  // ══════════════════════════════════════════
  // SWITCHES MAGNÉTICOS (Teclado)
  // ══════════════════════════════════════════
  {
    id: 'gravastar-purple',
    name: 'GravaStar Purple Jade HE',
    brand: 'GravaStar',
    desc: 'Switches Hall Effect Gateron Magnetic Jade con actuación ajustable 0.1–3.5mm y Rapid Trigger.',
    tag: 'Hall Effect',
    tagColor: '#a855f7',
    glowClass: 'glow-card-purple',
    priceColor: '#a855f7',
    prices: { '10 Pcs': 55.00, '20 Pcs': 100.00, '30 Pcs': 140.00 },
    originalPrices: { '10 Pcs': 70.00, '20 Pcs': 130.00, '30 Pcs': 180.00 },
    img: gravastarImg,
    badges: ['Rapid Trigger', 'HE'],
    category: 'Switches Magnéticos',
    rating: 4.6,
    reviews: 31,
    specs: [
      { label: 'Tipo', value: 'Hall Effect' },
      { label: 'Actuación', value: '0.1–3.5mm ajustable' },
      { label: 'Precisión', value: '0.005mm' },
      { label: 'Mount', value: 'Hot-Swappable' },
    ],
    quantityLabels: { '10 Pcs': 'Starter', '20 Pcs': 'Pro Pack', '30 Pcs': 'Full Kit' },
    features: [
      {
        icon: 'bolt',
        title: 'Rapid Trigger',
        description: 'Activación y reset instantáneo para strafing competitivo en FPS. Sin punto fijo de actuación.',
      },
      {
        icon: 'tune',
        title: 'Actuación Ajustable',
        description: 'Ajustá el punto de actuación de 0.1mm a 3.5mm según tu preferencia y estilo de juego.',
      },
      {
        icon: 'swap_vert',
        title: 'Hot-Swappable',
        description: 'Intercambio fácil sin soldadura. Compatible con teclados magnéticos/HE.',
      },
    ],
  },
  {
    id: 'wukong-magnetic',
    name: 'Everglide Wukong Magnetic',
    brand: 'Everglide',
    desc: 'Switch lineal magnético con sensibilidad de 0.005mm. Pre-lubricado de fábrica.',
    tag: 'Magnetic',
    tagColor: '#facc15',
    glowClass: 'glow-card-yellow',
    priceColor: '#facc15',
    prices: { '10 Pcs': 45.00, '20 Pcs': 80.00, '30 Pcs': 110.00 },
    originalPrices: { '10 Pcs': 60.00, '20 Pcs': 105.00, '30 Pcs': 145.00 },
    img: wukongImg,
    badges: ['0.005mm', 'Pre-Lubed'],
    category: 'Switches Magnéticos',
    rating: 4.7,
    reviews: 42,
    specs: [
      { label: 'Tipo', value: 'Lineal Magnético' },
      { label: 'Fuerza', value: '35gf actuación' },
      { label: 'Travel', value: '3.4mm total' },
      { label: 'Housing', value: 'Policarbonato (PC)' },
    ],
    quantityLabels: { '10 Pcs': 'Starter', '20 Pcs': 'Pro Pack', '30 Pcs': 'Full Kit' },
    features: [
      {
        icon: 'precision_manufacturing',
        title: 'Sensibilidad 0.005mm',
        description: 'Sensibilidad líder en la industria para la detección más precisa de cada pulsación.',
      },
      {
        icon: 'water_drop',
        title: 'Pre-Lubricado',
        description: 'Lubricación de fábrica para un deslizamiento suave y consistente desde el primer uso.',
      },
      {
        icon: 'fitness_center',
        title: '35gf Ligero',
        description: 'Fuerza de actuación ligera de 35gf con spring de 21mm para un tacto buttery smooth.',
      },
    ],
  },
  {
    id: 'gateron-orange',
    name: 'Gateron Orange Magnetic',
    brand: 'Gateron',
    desc: 'Switch lineal magnético dual-rail con 150 millones de ciclos de vida útil.',
    tag: 'Dual-Rail',
    tagColor: 'var(--neon-orange)',
    glowClass: 'glow-card-orange',
    priceColor: 'var(--neon-orange)',
    prices: { '10 Pcs': 40.00, '20 Pcs': 70.00, '30 Pcs': 100.00 },
    originalPrices: { '10 Pcs': 55.00, '20 Pcs': 90.00, '30 Pcs': 130.00 },
    img: gateronImg,
    badges: ['150M Ciclos', 'Lineal'],
    category: 'Switches Magnéticos',
    rating: 4.5,
    reviews: 37,
    specs: [
      { label: 'Tipo', value: 'Lineal Magnético' },
      { label: 'Fuerza', value: '30±7gf inicial' },
      { label: 'Travel', value: '4.1mm total' },
      { label: 'Durabilidad', value: '150M ciclos' },
    ],
    quantityLabels: { '10 Pcs': 'Starter', '20 Pcs': 'Pro Pack', '30 Pcs': 'Full Kit' },
    features: [
      {
        icon: 'view_column',
        title: 'Diseño Dual-Rail',
        description: 'Sistema de doble riel para mayor estabilidad y menos wobble durante el uso.',
      },
      {
        icon: 'all_inclusive',
        title: '150 Millones de Ciclos',
        description: 'Vida útil extraordinaria de 150M ciclos. Prácticamente indestructibles.',
      },
      {
        icon: 'water_drop',
        title: 'Pre-Lubricado',
        description: 'Lubricación de fábrica con travel suave de 4.1mm. Listo para usar sin modificaciones.',
      },
    ],
  },

  // ══════════════════════════════════════════
  // ACCESORIOS
  // ══════════════════════════════════════════
  {
    id: 'gaming-grip-tape',
    name: 'Gaming Grip Tape',
    brand: 'Alienboy',
    desc: 'Grip antideslizante premium para mouse gaming. Mejora el agarre, reduce fatiga y absorbe el sudor.',
    tag: 'Anti-Slip',
    tagColor: '#f472b6',
    glowClass: 'glow-card-pink',
    priceColor: '#f472b6',
    prices: { '1 Set': 60.00 },
    originalPrices: { '1 Set': 80.00 },
    img: gripBlancoImg,
    images: [gripBlancoImg, gripNegroLisoImg, gripNegroRugosoImg, gripRojoImg],
    imageLabels: ['Blanco', 'Negro Liso', 'Negro Rugoso', 'Rojo'],
    badges: ['4 Colores', 'Premium'],
    category: 'Accesorios',
    rating: 4.4,
    reviews: 19,
    specs: [
      { label: 'Material', value: 'Goma texturizada' },
      { label: 'Adhesivo', value: '3M premium' },
      { label: 'Colores', value: '4 disponibles' },
      { label: 'Compatibilidad', value: 'Universal' },
    ],
    quantityLabels: { '1 Set': 'Set Completo' },
    features: [
      {
        icon: 'back_hand',
        title: 'Anti-Deslizante',
        description: 'Previene que el mouse se deslice durante sesiones intensas. Agarre firme incluso con manos sudorosas.',
      },
      {
        icon: 'palette',
        title: '4 Colores Disponibles',
        description: 'Disponible en Blanco, Negro Liso, Negro con Rugosidad y Rojo para personalizar tu setup.',
      },
      {
        icon: 'shield',
        title: 'Protección de Superficie',
        description: 'Protege tu mouse contra desgaste, rayones y aceites de la piel. Fácil de aplicar y reemplazar.',
      },
    ],
  },
]

export default PRODUCTS
