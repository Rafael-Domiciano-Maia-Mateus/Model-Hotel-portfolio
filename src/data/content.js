// Conteúdo central do site — Hotel Portfolio
// Imagens: Unsplash (uso livre, royalty-free) como placeholders de alta qualidade.

export const nav = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Acomodações', href: '#quartos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
];

export const amenities = [
    {
        icon: 'pool',
        title: 'Piscina Infinita',
        desc: 'Borda infinita voltada para o horizonte, aquecida nas estações mais frias do ano.',
    },
    {
        icon: 'spa',
        title: 'Spa Premium',
        desc: 'Rituais de bem-estar com terapeutas especializados e produtos naturais da região.',
    },
    {
        icon: 'restaurant',
        title: 'Restaurante Gourmet',
        desc: 'Cozinha autoral assinada por chef premiado, com menu sazonal e carta de vinhos.',
    },
    {
        icon: 'gym',
        title: 'Academia Completa',
        desc: 'Equipamentos de última geração e aulas funcionais com vista para o mar.',
    },
    {
        icon: 'view',
        title: 'Vista Panorâmica',
        desc: 'Suítes e áreas comuns desenhadas para emoldurar o nascer e o pôr do sol.',
    },
    {
        icon: 'parking',
        title: 'Estacionamento',
        desc: 'Vaga coberta e serviço de valet disponível 24 horas para todos os hóspedes.',
    },
    {
        icon: 'wifi',
        title: 'Wi-Fi Gratuito',
        desc: 'Conexão de alta velocidade em todas as áreas internas e externas do resort.',
    },
    {
        icon: 'breakfast',
        title: 'Café da Manhã Incluso',
        desc: 'Buffet completo com produtos frescos e estação de sucos naturais todos os dias.',
    },
];

export const rooms = [
    {
        name: 'Suíte Premium',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1400&auto=format&fit=crop',
        desc: 'Ambiente amplo com varanda privativa e vista parcial para o mar, ideal para casais.',
        capacity: '2 hóspedes',
        size: '42 m²',
        amenitiesList: ['Varanda privativa', 'Banheira de hidromassagem', 'Frigobar premium'],
        price: 1280,
    },
    {
        name: 'Suíte Luxo',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1400&auto=format&fit=crop',
        desc: 'Decoração refinada com sala de estar integrada e vista total para o horizonte.',
        capacity: '2-3 hóspedes',
        size: '58 m²',
        amenitiesList: ['Vista frontal para o mar', 'Sala de estar', 'Máquina de café'],
        price: 1890,
    },
    {
        name: 'Quarto Executivo',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1400&auto=format&fit=crop',
        desc: 'Pensado para viagens de negócios, com espaço de trabalho e conforto absoluto.',
        capacity: '1-2 hóspedes',
        size: '34 m²',
        amenitiesList: ['Espaço de trabalho', 'Acesso ao lounge executivo', 'Check-in expresso'],
        price: 990,
    },
    {
        name: 'Suíte Master',
        image: 'https://images.unsplash.com/photo-1601565415267-724dbc556b75?q=80&w=1400&auto=format&fit=crop',
        desc: 'Nossa acomodação mais exclusiva, com piscina privativa e mordomo dedicado.',
        capacity: '4 hóspedes',
        size: '96 m²',
        amenitiesList: ['Piscina privativa', 'Mordomo 24h', 'Terraço com vista 180°'],
        price: 4800,
    },
];

export const galleryCategories = ['Todos', 'Quartos', 'Piscina', 'Restaurante', 'Área Externa', 'Spa', 'Recepção'];

export const galleryImages = [
    {
        category: 'Quartos',
        url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop',
        alt: 'Suíte com vista para o mar no Hotel Aurora',
    },
    {
        category: 'Piscina',
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
        alt: 'Piscina infinita ao entardecer',
    },
    {
        category: 'Restaurante',
        url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
        alt: 'Mesa posta no restaurante gourmet',
    },
    {
        category: 'Área Externa',
        url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop',
        alt: 'Jardim e área externa do resort',
    },
    {
        category: 'Spa',
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
        alt: 'Sala de tratamento do spa',
    },
    {
        category: 'Recepção',
        url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
        alt: 'Lobby de recepção do Hotel Aurora',
    },
    {
        category: 'Quartos',
        url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop',
        alt: 'Suíte luxo com sala de estar',
    },
    {
        category: 'Piscina',
        url: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=1200&auto=format&fit=crop',
        alt: 'Vista aérea da piscina infinita',
    },
    {
        category: 'Área Externa',
        url: 'https://images.unsplash.com/photo-1611862353072-499b86948f78?q=80&w=1200&auto=format&fit=crop',
        alt: 'Deck e espreguiçadeiras à beira-mar',
    },
];

export const stats = [
    { value: 12000, suffix: '+', label: 'hóspedes satisfeitos' },
    { value: 4.9, suffix: '', label: 'estrelas em avaliações', decimals: 1 },
    { value: 25, suffix: '', label: 'anos de tradição' },
    { value: 98, suffix: '%', label: 'de recomendação' },
];

export const testimonials = [
    {
        name: 'Marina Costa',
        country: 'Brasil',
        photo: 'https://i.pravatar.cc/120?img=47',
        rating: 5,
        text: 'Cada detalhe foi pensado com cuidado. Do atendimento ao café da manhã, vivemos dias de tranquilidade absoluta.',
    },
    {
        name: 'Lucas Pereira',
        country: 'Portugal',
        photo: 'https://i.pravatar.cc/120?img=12',
        rating: 5,
        text: 'A vista da suíte master é de tirar o fôlego. Voltaremos com certeza para celebrar nosso aniversário novamente aqui.',
    },
    {
        name: 'Helena Duarte',
        country: 'Brasil',
        photo: 'https://i.pravatar.cc/120?img=32',
        rating: 5,
        text: 'O spa é um capítulo aparte: silêncio, aroma e técnica em perfeita harmonia. Saí renovada de cada sessão.',
    },
    {
        name: 'Rafael Almeida',
        country: 'Argentina',
        photo: 'https://i.pravatar.cc/120?img=51',
        rating: 5,
        text: 'Equipe atenciosa do início ao fim, restaurante impecável e uma piscina que parece se misturar com o mar.',
    },
];

export const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { name: 'WhatsApp', href: 'https://wa.me/5512999990000', icon: 'whatsapp' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
];
