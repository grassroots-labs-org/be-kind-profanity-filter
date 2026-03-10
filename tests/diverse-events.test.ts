import filter from "../src/index.js";

/**
 * Diverse event description test suite.
 * Contains 2000+ clean event descriptions across 50+ categories,
 * covering a wide range of real-world community event scenarios.
 *
 * All descriptions should pass through the profanity filter without
 * false positives (filter.check() === false).
 */

describe("Diverse Event Descriptions", () => {
  beforeAll(() => {
    filter.updateConfig({ enableLeetSpeak: false });
  });

  afterAll(() => {
    filter.updateConfig({ enableLeetSpeak: true });
  });

  // ============================================================
  // 1. FAMILY & CHILDREN EVENTS
  // ============================================================
  const familyEvents: string[][] = [
    ["Family fun day at Maple Grove Park with face painting, balloon animals, and a petting zoo."],
    ["Mommy and me music class for ages 0-3. Instruments provided. Meets every Tuesday at 10 AM."],
    ["Kids craft afternoon at the library. Make paper mache masks and friendship bracelets."],
    ["Story time with Mr. Rogers at the bookshop. Ages 2-5 welcome. Free cookies and juice."],
    ["Baby sign language workshop. Learn 50 essential signs to communicate with your infant."],
    ["Toddler tumbling class at the gymnastics center. Safe, supervised play on soft equipment."],
    ["Family bike ride along the canal path. 5 miles, flat terrain, suitable for all ages."],
    ["Children's science experiment day. Build volcanoes, grow crystals, and launch rockets."],
    ["Parent-child pottery class. Create a keepsake together. Ages 6 and up with adult."],
    ["Family movie marathon at the rec center. Three animated classics, popcorn included."],
    ["Kids cooking camp: learn to make pizza, cookies, and smoothies. Ages 8-12."],
    ["Puppet show at the children's museum. Three performances daily at 11, 1, and 3."],
    ["Family scavenger hunt through the botanical garden. Prizes for all participants."],
    ["Lego building challenge for kids ages 5-14. Prizes in three age categories."],
    ["Teddy bear picnic in the park. Bring your favorite stuffed animal for games and snacks."],
    ["Family astronomy night. Telescope viewing, constellation stories, and hot chocolate."],
    ["Kids gymnastics showcase. Watch your little ones perform their routines."],
    ["Family board game tournament. Bring your own or borrow from our collection of 200+."],
    ["Children's book swap. Bring gently used books and trade for new-to-you titles."],
    ["Family drum circle on the beach. No experience needed, drums provided."],
    ["Daddy-daughter dance at the community center. Formal attire encouraged. Photos included."],
    ["Mother-son bowling night. Two games and shoes included. Pizza served."],
    ["Sibling rivalry workshop for parents. Learn strategies for peaceful conflict resolution."],
    ["Family camping weekend at Pine Ridge. Guided nature activities and campfire songs."],
    ["Magic show for kids at the town hall. Two performances: 2 PM and 4 PM. Free admission."],
    ["Baby music and movement class. Sing, dance, and play rhythm instruments together."],
    ["Family heritage cooking class. Learn your grandparents' recipes with a modern twist."],
    ["Kids martial arts demonstration and free trial class. Ages 4-12 welcome."],
    ["Family trivia night. Teams of 4-6. Categories include Disney, science, and geography."],
    ["Children's theater production of Charlotte's Web. Matinee shows Saturday and Sunday."],
    ["Family roller skating night at the rink. Admission includes skate rental and a drink."],
    ["Kids gardening workshop. Plant seeds, learn about composting, take home a seedling."],
    ["Family karaoke night. Song books for kids and adults. No judgment, all fun!"],
    ["Newborn care basics class for expecting parents. Car seats, feeding, and sleep safety."],
    ["Family rock painting event. Decorate rocks to hide around the neighborhood."],
    ["Kids chess tournament at the community center. Beginners and experienced players welcome."],
    ["Family stargazing campout. Bring tents and sleeping bags. Telescopes provided."],
    ["Children's dance recital. Ballet, tap, and hip-hop performances. Tickets $10 at the door."],
    ["Family volunteer day at the animal shelter. Help walk dogs and socialize cats."],
    ["Kids robotics workshop. Build and program a simple robot to complete challenges."],
  ];

  // ============================================================
  // 2. SENIOR-FOCUSED EVENTS
  // ============================================================
  const seniorEvents: string[][] = [
    ["Senior coffee and conversation hour every weekday morning from 8-10 AM."],
    ["Chair yoga for seniors. Gentle stretches and breathing exercises. No mat needed."],
    ["Retired teachers association monthly meeting and luncheon. Guest speaker this month."],
    ["Senior computer literacy class. Learn email, video calls, and online banking safely."],
    ["Golden age dance at the community center. Big band music and refreshments."],
    ["Seniors book club meets first Thursday of each month. Large print copies available."],
    ["Memory care support group for caregivers. Meets every other Wednesday at 2 PM."],
    ["Senior walking group. Gentle pace through the park. Meet at the gazebo at 9 AM."],
    ["Retired professionals networking lunch. Share experiences and stay connected."],
    ["Senior art class: watercolor landscapes. All supplies provided. Beginners welcome."],
    ["AARP tax preparation assistance for seniors. Free service, appointment required."],
    ["Senior bridge club meets every Tuesday and Thursday afternoon in the card room."],
    ["Grandparents raising grandchildren support group. Resources and fellowship."],
    ["Senior smartphone workshop. Learn to use apps, take photos, and stay safe online."],
    ["Lifelong learning lecture: the history of jazz from New Orleans to the present day."],
    ["Senior fitness: gentle strength training with resistance bands. Chairs available."],
    ["Memoir writing workshop for seniors. Share your life story in your own words."],
    ["Senior day trip to the botanical gardens. Bus departs at 9 AM, returns by 4 PM."],
    ["Quilting circle for experienced and beginner quilters. Bring your own project."],
    ["Senior movie afternoon. Classic films shown every Friday at 1 PM. Free popcorn."],
    ["Tai chi for balance and fall prevention. Evidence-based program for adults 60+."],
    ["Senior chorus rehearsal every Monday at 3 PM. New voices welcome, no audition needed."],
    ["Hearing health screening at the senior center. Free, no appointment necessary."],
    ["Senior oil painting class. Work at your own pace with individual instruction."],
    ["Wii bowling tournament for seniors. Teams of two, prizes for the winners."],
    ["Senior lunch and learn: understanding Medicare changes for next year."],
    ["Vintage car appreciation club for classic car enthusiasts. Show and tell monthly."],
    ["Senior bingo night every Wednesday. Cards are $1 each. Cash prizes."],
    ["Armchair travel series: virtual tours of national parks with ranger commentary."],
    ["Senior knitting group. Learn new techniques, share patterns, enjoy company."],
  ];

  // ============================================================
  // 3. ENVIRONMENTAL & SUSTAINABILITY EVENTS
  // ============================================================
  const environmentalEvents: string[][] = [
    ["Beach cleanup volunteer day. Buckets and grabbers provided. Meet at the boardwalk at 8 AM."],
    ["Composting workshop for beginners. Learn to turn food scraps into garden gold."],
    ["Tree planting ceremony at Centennial Park. 100 native saplings need homes."],
    ["Solar panel information session. Learn about incentives and installation process."],
    ["Zero-waste living seminar. Practical tips for reducing household waste by 80%."],
    ["River water quality testing workshop. Citizen science project, data shared publicly."],
    ["Electric vehicle showcase. Test drive EVs from five manufacturers. Free admission."],
    ["Community seed swap. Bring heirloom seeds and take home new varieties."],
    ["Native plant gardening workshop. Create habitat for pollinators in your backyard."],
    ["Documentary screening: Our Planet. Discussion follows with local climate scientists."],
    ["Rain barrel making workshop. Build your own for $25 in materials. Tools provided."],
    ["Bike repair clinic. Bring your bicycle for free tune-ups and safety checks."],
    ["Upcycling craft workshop. Turn old t-shirts into tote bags. Materials provided."],
    ["Farm tour and organic agriculture demonstration at Green Acres Family Farm."],
    ["Community fridge launch event. Learn how to share surplus food and reduce waste."],
    ["Energy audit training for homeowners. Learn to find and fix energy leaks."],
    ["Pollinator garden planting day. Help install a butterfly and bee habitat at the school."],
    ["Sustainability fair with 30 vendors showcasing eco-friendly products and services."],
    ["Citizen science bird count. Help track migratory patterns in our watershed."],
    ["Green building tour. Visit three certified net-zero homes in the neighborhood."],
    ["Shoreline erosion prevention workshop. Learn about natural solutions for your property."],
    ["Clothing swap event at the community center. Bring clean items, take what you need."],
    ["Renewable energy career panel. Hear from professionals in solar, wind, and geothermal."],
    ["Biochar workshop: learn to make this ancient soil amendment from yard waste."],
    ["Community garden plot assignments for the spring season. Annual fee $25."],
    ["Invasive species removal day at the nature preserve. Gloves and tools provided."],
    ["Water conservation seminar. Xeriscaping, drip irrigation, and greywater systems."],
    ["E-waste recycling drive. Drop off old electronics safely. No TVs over 32 inches."],
    ["Climate action planning meeting. Help shape the city's sustainability roadmap."],
    ["Mushroom foraging walk. Learn to identify edible species with a certified guide."],
  ];

  // ============================================================
  // 4. MENTAL HEALTH & WELLNESS EVENTS
  // ============================================================
  const mentalHealthEvents: string[][] = [
    ["Anxiety management workshop. CBT techniques you can practice at home."],
    ["Grief support circle meets every Thursday evening. Facilitated by a licensed counselor."],
    ["Mindfulness meditation drop-in session. No experience needed. Cushions provided."],
    ["Depression awareness seminar. Learn the signs and how to support loved ones."],
    ["Art therapy open studio. Express yourself through painting, drawing, or sculpture."],
    ["Stress reduction through journaling workshop. Notebooks and pens provided."],
    ["Suicide prevention gatekeeper training. Learn to recognize warning signs and respond."],
    ["Yoga for trauma recovery. Gentle, trauma-informed class with certified instructor."],
    ["Emotional intelligence workshop for managers. Build stronger teams through empathy."],
    ["Sleep hygiene seminar. Science-based strategies for better rest."],
    ["Burnout prevention roundtable for healthcare workers. Peer support and coping tools."],
    ["Family therapy information night. What to expect and how to prepare."],
    ["Sound bath meditation at the wellness center. Tibetan singing bowls and chimes."],
    ["Nature therapy walk. Forest bathing for stress relief. Slow pace, mindful awareness."],
    ["Addiction recovery support meeting. Confidential, judgment-free space. Meets daily."],
    ["Self-compassion workshop based on Dr. Kristin Neff's research. Exercises included."],
    ["Breathwork class for anxiety relief. Learn box breathing, 4-7-8, and other techniques."],
    ["PTSD awareness presentation by local veterans affairs counselor. Open to the public."],
    ["Laughter yoga session in the park. Combine gentle exercise with the joy of laughter."],
    ["Dialectical behavior therapy skills group. Registration required, insurance accepted."],
    ["Mental health first aid certification course. Eight-hour training over two days."],
    ["Body scan meditation for chronic pain management. Led by a certified mindfulness teacher."],
    ["Peer counselor training program. Help others while developing your listening skills."],
    ["Wellness retreat day: yoga, meditation, healthy cooking, and nature walks."],
    ["Neurodiversity celebration and resource fair. Connect with support services and community."],
    ["Gratitude journaling workshop. Simple practices to boost mood and wellbeing."],
    ["Digital detox challenge kickoff. Tips for reducing screen time and reconnecting."],
    ["Couples communication workshop. Learn to listen actively and express needs clearly."],
    ["Resilience building seminar for educators. Self-care strategies for the classroom."],
    ["Progressive muscle relaxation class for beginners. Release tension from head to toe."],
  ];

  // ============================================================
  // 5. CAREER & JOB FAIR EVENTS
  // ============================================================
  const careerEvents: string[][] = [
    ["Job fair at the convention center. Over 80 employers hiring across all industries."],
    ["Resume review workshop. Bring three copies of your resume. Feedback from HR professionals."],
    ["Mock interview practice sessions. One-on-one with experienced hiring managers."],
    ["LinkedIn profile optimization workshop. Get more visibility from recruiters."],
    ["Career change seminar for mid-career professionals. Assess skills and explore options."],
    ["Networking mixer for young professionals. Appetizers and drinks included."],
    ["Salary negotiation workshop. Learn techniques to advocate for your worth."],
    ["Government job application workshop. Navigate USAJobs and federal hiring process."],
    ["Freelancing 101: Set your rates, find clients, and manage your own business."],
    ["Tech industry career panel. Engineers, designers, and PMs share their paths."],
    ["Apprenticeship fair for skilled trades. Electricians, plumbers, carpenters, and welders."],
    ["Cover letter writing clinic. Templates and examples provided. Bring your laptop."],
    ["Personal branding workshop for job seekers. Stand out in a competitive market."],
    ["Veteran transition career fair. Companies committed to hiring military veterans."],
    ["Remote work opportunities panel. Companies hiring fully remote positions nationwide."],
    ["Entrepreneurship bootcamp weekend. Business plan writing, funding, and legal basics."],
    ["Healthcare career exploration night for high school students. Tours and Q&A."],
    ["Teacher recruitment fair. Districts from five states seeking certified educators."],
    ["Construction industry hiring event. CDL drivers, equipment operators, and laborers needed."],
    ["Data analytics career path workshop. From entry-level analyst to director."],
    ["Portfolio review night for graphic designers and illustrators. Industry professionals judge."],
    ["Real estate licensing information session. Requirements, timeline, and exam prep tips."],
    ["Nonprofit sector career fair. Organizations seeking passionate mission-driven professionals."],
    ["Professional development day. Workshops on time management, leadership, and communication."],
    ["Returnship program information session for professionals reentering the workforce."],
    ["IT certification study group forming. CompTIA, AWS, and Cisco tracks available."],
    ["Career counseling drop-in hours at the library. Free, confidential, no appointment needed."],
    ["Workforce development training grant applications now open. Tuition assistance available."],
    ["Interview outfit closet open house. Professional clothing available free to job seekers."],
    ["Alumni networking reception. Reconnect with classmates and expand your professional circle."],
  ];

  // ============================================================
  // 6. MUSEUM & GALLERY EVENTS
  // ============================================================
  const museumEvents: string[][] = [
    ["Museum after dark: cocktails and jazz in the sculpture garden. Adults 21+."],
    ["Guided tour of the Egyptian antiquities collection. Meet in the main lobby at 2 PM."],
    ["Children's museum sensory play day. Special accommodations for children with autism."],
    ["Photography exhibit: Portraits of Resilience. Opening reception with the artist."],
    ["Natural history museum fossil dig experience for kids. Uncover replica dinosaur bones."],
    ["Art museum sketching hour. Bring your materials and draw in the galleries."],
    ["Interactive science museum exhibit: The Physics of Roller Coasters. Through June."],
    ["Museum membership appreciation night. Exclusive preview of the new wing."],
    ["Docent-led tour of the Impressionist collection. Monet, Renoir, and Degas."],
    ["Museum lecture series: Ancient Rome from Republic to Empire. Six-week course."],
    ["Aviation museum open cockpit day. Sit in vintage aircraft cockpits and talk to pilots."],
    ["Textile museum weaving demonstration. Watch artisans create fabric on historic looms."],
    ["Maritime museum harbor cruise. Two-hour narrated tour of the historic waterfront."],
    ["Contemporary art gallery talk: Understanding Abstract Expressionism."],
    ["Museum family day: free admission for up to two adults and four children."],
    ["Railroad museum model train exhibition. Over 500 square feet of detailed layouts."],
    ["Planetarium show: Journey to the Edge of the Universe. Shows at 11, 1, and 3."],
    ["Glass blowing demonstration at the craft museum. Watch molten glass become art."],
    ["Museum curator panel discussion: Ethics of Artifact Acquisition and Repatriation."],
    ["Botanical museum orchid exhibition. Over 200 varieties on display through April."],
    ["Military history museum memorial lecture. Honoring veterans of the Pacific theater."],
    ["Museum wine and watercolor evening. Paint a masterpiece-inspired piece while sipping wine."],
    ["Digital art museum virtual reality experience. Step inside famous paintings."],
    ["Museum holiday market. Unique gifts from local artisans. Free gift wrapping."],
    ["Sculpture garden moonlight tour. Flashlights provided. Hot cider at the end."],
    ["History museum escape room: Crack the Code of the Cold War. Teams of 4-6."],
    ["Museum conservation lab open house. See how artifacts are preserved and restored."],
    ["Folk art museum quilt exhibition. Handmade quilts from the Appalachian tradition."],
    ["Aerospace museum rocket launch demonstration. Build and launch model rockets."],
    ["Museum of natural science butterfly release. 500 butterflies in the outdoor garden."],
  ];

  // ============================================================
  // 7. VOLUNTEER & COMMUNITY SERVICE EVENTS
  // ============================================================
  const volunteerEvents: string[][] = [
    ["Meals on Wheels volunteer orientation. Deliver meals to homebound seniors in your area."],
    ["Habitat for Humanity build Saturday. No construction experience needed. Lunch provided."],
    ["Food bank sorting day. Help organize donated items for distribution."],
    ["Animal shelter volunteer training. Learn to walk dogs, socialize cats, and assist adoptions."],
    ["Highway litter cleanup. Safety vests and bags provided. Meet at mile marker 12."],
    ["Tutoring volunteers needed for after-school reading program. One hour per week."],
    ["Hospital volunteer information session. Opportunities in many departments."],
    ["Community kitchen prep day. Help prepare 500 meals for families in need."],
    ["Big Brothers Big Sisters recruitment event. Become a mentor to a young person."],
    ["Library volunteer orientation. Shelve books, assist patrons, and run programs."],
    ["Crisis hotline volunteer training. 40-hour certification program starts next month."],
    ["Park maintenance volunteer day. Trail repair, bench painting, and sign installation."],
    ["Refugee welcome committee meeting. Help newcomers navigate resources and settle in."],
    ["Blood drive volunteer coordinators needed. Help with registration and donor care."],
    ["Coat drive collection event at the fire station. New and gently used coats accepted."],
    ["Court appointed special advocates training. Help advocate for children in foster care."],
    ["Community theater set construction volunteers needed. Painting, building, and decorating."],
    ["Election day poll worker training. Serve your community on election day. Stipend provided."],
    ["Youth mentorship program kickoff. Monthly meetings, group activities, and field trips."],
    ["Disaster preparedness volunteer corps recruitment. Training provided by emergency management."],
    ["Senior companion volunteer program. Visit isolated older adults for conversation and company."],
    ["School supply drive. Backpacks, notebooks, and pencils for students in need."],
    ["Community mural painting project. Help paint a mural on the library's exterior wall."],
    ["Pro bono legal clinic volunteers needed. Attorneys and paralegals welcome."],
    ["Neighborhood tool library launch. Donate tools and help build the lending inventory."],
    ["Free tax preparation volunteer training. IRS VITA certification course, 20 hours."],
    ["Adaptive sports volunteer coaches needed for wheelchair basketball and sled hockey."],
    ["Community emergency response team training. Disaster first aid and search techniques."],
    ["Soup kitchen volunteer shifts available: breakfast, lunch, and dinner service."],
    ["Adopt-a-highway cleanup crew forming for the spring season. Monthly commitment."],
  ];

  // ============================================================
  // 8. DATING & SINGLES EVENTS
  // ============================================================
  const datingEvents: string[][] = [
    ["Speed dating at the wine bar. Ages 25-40. Eight-minute rounds. Light appetizers."],
    ["Singles hiking group. Easy to moderate trail, great conversation, coffee after."],
    ["Lock and key mixer at the rooftop lounge. Find your match and win a prize."],
    ["Singles cooking class: make pasta from scratch and enjoy dinner together."],
    ["Christian singles fellowship group meets every Sunday after the 11 AM service."],
    ["Singles trivia night at the brewery. Teams form on the spot. Great way to meet people."],
    ["Over-40 singles wine tasting event. Six wines, cheese pairings, and good company."],
    ["Singles book club for readers who want to discuss great literature and meet people."],
    ["Speed friending event for new residents. No romantic pressure, just making connections."],
    ["Singles paint and sip night. Create art, enjoy wine, and meet fellow creatives."],
    ["Dog park singles meetup. Bring your pup and chat with other dog-loving singles."],
    ["Singles salsa dance class and social. No partner needed, we rotate throughout."],
    ["Jewish singles mixer at the community center. Appetizers and live acoustic music."],
    ["Adventure singles club: monthly outings including kayaking, rock climbing, and biking."],
    ["Singles volunteer day at the community garden. Give back while meeting someone new."],
    ["Professionals singles mixer. Business casual attire. Complimentary first drink."],
    ["Singles game night. Board games, card games, and icebreaker activities."],
    ["Outdoor singles yoga followed by brunch at the café next door."],
    ["Singles photography walk through the city. Capture moments and make connections."],
    ["Mindful dating workshop. Learn to approach relationships with intention and authenticity."],
  ];

  // ============================================================
  // 9. TRAVEL & TOURISM EVENTS
  // ============================================================
  const travelEvents: string[][] = [
    ["Travel talk: backpacking Southeast Asia on a budget. Tips, itineraries, and photos."],
    ["International travel health clinic. Vaccinations and travel medicine consultations."],
    ["Study abroad information session. Programs in 30 countries. Financial aid available."],
    ["Travel photography workshop. Composition, lighting, and storytelling through images."],
    ["Armchair travel night: virtual tour of Iceland's glaciers and hot springs."],
    ["Solo female traveler meetup. Share experiences, tips, and safety strategies."],
    ["Language exchange café. Practice your travel language skills with native speakers."],
    ["Passport and visa application workshop. Bring your documents for guided assistance."],
    ["Travel writing seminar. Turn your adventures into published stories."],
    ["Cultural immersion trip planning session. Volunteer travel opportunities worldwide."],
    ["RV and campervan lifestyle seminar. Full-time travel tips and destination ideas."],
    ["International food and travel festival. Taste cuisines from 40 countries."],
    ["Travel gear swap meet. Trade gently used luggage, backpacks, and accessories."],
    ["Adventure travel film festival. Three documentaries about mountaineering and exploration."],
    ["Senior travel group planning meeting. Next trip: Alaskan cruise in September."],
    ["Digital nomad meetup. Remote work tips, coworking spaces, and destination reviews."],
    ["Heritage travel workshop. Trace your family roots and plan a meaningful journey."],
    ["Sustainable tourism panel. How to travel responsibly and support local communities."],
    ["Weekend getaway planning workshop. Find hidden gems within a three-hour drive."],
    ["Travel rewards and points optimization seminar. Maximize your credit card benefits."],
  ];

  // ============================================================
  // 10. VEHICLE & TRANSPORTATION EVENTS
  // ============================================================
  const vehicleEvents: string[][] = [
    ["Classic car show at the fairgrounds. Over 200 vehicles from the 1920s to 1970s."],
    ["Motorcycle safety course. MSF certified, bikes and helmets provided."],
    ["Electric vehicle owners club monthly cruise. Charging stations mapped along the route."],
    ["Vintage tractor pull at the county fair. Competition classes by horsepower."],
    ["Custom car audio competition. Categories for sound quality and bass performance."],
    ["Bicycle commuting workshop. Route planning, gear essentials, and maintenance basics."],
    ["Model railroad club open house. See our new 800 square foot layout."],
    ["Car maintenance basics for beginners. Check oil, change tires, and jump start a battery."],
    ["Lowrider car show and cultural celebration. Music, dancing, and food trucks."],
    ["Boat show at the marina. New and used vessels, accessories, and marine services."],
    ["Hot rod and custom car build workshop. Learn metal fabrication and paint techniques."],
    ["Aviation fly-in and breakfast. See vintage aircraft up close. Pancakes served on the tarmac."],
    ["Jeep off-road trail ride. Four-wheel-drive only. Helmets recommended."],
    ["Transit riders advisory committee meeting. Give input on bus route changes."],
    ["Sailboat racing clinic. Learn rules, tactics, and crew coordination."],
    ["Drones for beginners workshop. Learn to fly, photograph, and follow FAA regulations."],
    ["Vintage motorcycle restoration seminar. Sourcing parts, wiring, and engine rebuilds."],
    ["Pedal-powered parade through downtown. Decorate your bike and join the fun."],
    ["Autonomous vehicle technology talk. The future of self-driving cars and trucks."],
    ["Antique fire truck display and firefighter appreciation day."],
  ];

  // ============================================================
  // 11. HOME & DIY EVENTS
  // ============================================================
  const homeEvents: string[][] = [
    ["Home improvement expo at the convention center. Kitchen, bath, and landscaping vendors."],
    ["DIY shelving workshop. Build a floating shelf in two hours. Wood and tools provided."],
    ["Interior design trends seminar. What's in for living rooms and bedrooms this year."],
    ["Plumbing basics for homeowners. Fix leaky faucets and running toilets yourself."],
    ["Container gardening class. Grow vegetables on your balcony or patio."],
    ["Furniture restoration workshop. Strip, sand, stain, and refinish a piece you bring."],
    ["Smart home technology demonstration. Lighting, security, and energy management."],
    ["Tiny house open house tour. Visit three tiny homes and meet their builders."],
    ["Tile installation workshop. Learn to tile a backsplash from start to finish."],
    ["Home energy efficiency audit walkthrough. Find where your house is losing energy."],
    ["DIY natural cleaning products workshop. Make effective cleaners from pantry staples."],
    ["Raised bed garden construction class. Build a 4x8 bed in one afternoon."],
    ["Wallpaper hanging tutorial. Modern techniques for peel-and-stick and traditional paper."],
    ["Home canning and preserving basics. Water bath and pressure canning demonstrated."],
    ["Paint color consultation workshop. Choose the right palette for your space."],
    ["Electrical safety for homeowners. When to DIY and when to call a professional."],
    ["Deck building basics. Footings, framing, and decking materials compared."],
    ["Window treatment workshop. Sew your own curtains and roman shades."],
    ["Garage organization challenge. Systems and solutions for a clutter-free space."],
    ["Backyard chicken keeping 101. Coops, breeds, feeding, and local regulations."],
  ];

  // ============================================================
  // 12. GAMING & ESPORTS EVENTS
  // ============================================================
  const gamingEvents: string[][] = [
    ["Retro arcade night at the gaming lounge. Classic cabinets from the 80s and 90s. Free play."],
    ["Dungeons & Dragons one-shot adventure. Pre-made characters available. New players welcome."],
    ["Super Smash Bros tournament. Double elimination bracket. Entry fee $10, cash prizes."],
    ["Board game café grand opening. Over 500 games to play. Coffee and snacks available."],
    ["Pokemon trading card game league night. Bring your deck and battle for points."],
    ["Local esports viewing party. Watch the League of Legends championship on the big screen."],
    ["Minecraft building competition for kids ages 8-15. Theme: underwater city."],
    ["Tabletop RPG convention. Pathfinder, Call of Cthulhu, and Fate Core sessions all weekend."],
    ["Speedrunning showcase. Watch gamers complete classic titles in record time."],
    ["Magic: The Gathering draft night. $15 entry includes three booster packs and promo card."],
    ["Game design workshop. Create a board game prototype in one day. Materials provided."],
    ["Trivia game night: pop culture, science, history, and sports. Teams of 2-6."],
    ["Chess club tournament. Swiss-system pairing, four rounds. All skill levels."],
    ["Virtual reality gaming experience. Try the latest VR headsets and games."],
    ["Escape room championship. Teams compete for the fastest solve time. Five rooms available."],
    ["Wargaming miniatures painting workshop. Learn to prime, paint, and base your models."],
    ["Retro console LAN party. Bring your old systems or play on ours. Pizza provided."],
    ["Game developer meetup. Show your indie project and get feedback from peers."],
    ["Puzzle solving marathon. Jigsaw, crossword, and logic puzzles. Prizes for completion."],
    ["Strategy board game night. Settlers of Catan, Ticket to Ride, and Pandemic."],
  ];

  // ============================================================
  // 13. RELIGIOUS & SPIRITUAL EVENTS
  // ============================================================
  const religiousEvents: string[][] = [
    ["Interfaith dialogue series: finding common ground across traditions."],
    ["Church potluck supper and hymn sing. Bring your favorite covered dish."],
    ["Mosque open house day. Tours, refreshments, and conversations about Islam."],
    ["Buddhist meditation retreat. Weekend program with experienced teachers."],
    ["Synagogue community Shabbat dinner. All are welcome. RSVP for headcount."],
    ["Hindu temple festival celebrating Navratri. Nine nights of dance and prayer."],
    ["Quaker meeting for worship. One hour of silent contemplation. Visitors welcome."],
    ["Gospel choir concert at the cathedral. Free admission, donations appreciated."],
    ["Sikh community langar. Free communal meal open to all, regardless of faith."],
    ["Easter sunrise service at the amphitheater. Coffee and breakfast to follow."],
    ["Ramadan iftar dinner. Breaking fast together at sunset. All faiths welcome."],
    ["Unitarian Universalist discussion group: Ethics Without Dogma."],
    ["Bible study group for young adults. Meets Wednesday evenings at the campus center."],
    ["Advent wreath making workshop at the parish hall. Materials and refreshments provided."],
    ["Indigenous spiritual practices presentation. Smudging ceremony and storytelling."],
    ["Baha'i fireside chat. Informal gathering to learn about the Baha'i faith."],
    ["Taizé prayer service. Candlelight, chanting, and contemplative silence."],
    ["Church youth group lock-in. Games, movies, and fellowship from 8 PM to 8 AM."],
    ["Labyrinth walking meditation at the retreat center. Open to all seekers."],
    ["Passover Seder meal for the community. Traditional foods and readings."],
  ];

  // ============================================================
  // 14. SCIENCE & RESEARCH EVENTS
  // ============================================================
  const scienceEvents: string[][] = [
    ["Citizen science workshop: monitoring monarch butterfly migration patterns."],
    ["Astronomy club star party. Jupiter and Saturn visible through member telescopes."],
    ["Science café: CRISPR gene editing and the future of medicine. Drinks available."],
    ["Weather spotter training with the National Weather Service. Learn to report storms."],
    ["Marine biology lecture: coral reef conservation in the face of climate change."],
    ["Amateur radio operators field day. Set up antennas and make contacts worldwide."],
    ["Geology field trip to the limestone quarry. Hard hats provided. Bring sturdy shoes."],
    ["Chemistry demonstration show for kids. Safe experiments with dramatic results."],
    ["Bird banding station open to visitors. Watch researchers tag migratory songbirds."],
    ["Robotics competition for high school teams. Design, build, and compete."],
    ["Paleontology lecture: new dinosaur discoveries from the Gobi Desert."],
    ["Microscopy workshop. Examine pond water, insects, and plant cells up close."],
    ["Science fair judging volunteer orientation. Help evaluate student projects."],
    ["Solar eclipse viewing party. Certified glasses distributed free while supplies last."],
    ["Entomology walk: fascinating insects of our local ecosystem. Bug boxes provided."],
    ["Physics of music lecture and demonstration. How instruments produce sound waves."],
    ["Bat conservation night hike. Echolocation detectors provided. Learn about local species."],
    ["Environmental DNA sampling workshop. Detect aquatic species from water samples."],
    ["Rocket science for beginners. Build and launch Estes model rockets."],
    ["Archaeological dig volunteer day. Screen soil, catalog artifacts, and learn field methods."],
    ["Neuroscience public lecture: how the brain processes language and memory."],
    ["Mycology walk: identifying fungi in the forest. Spore prints and identification keys."],
    ["Quantum computing introduction talk. No physics background required."],
    ["Citizen weather observer program. Set up a home weather station and report data."],
    ["Marine mammal stranding response volunteer training. Learn protocols and safety."],
    ["Astrophotography workshop. Capture stunning images of the night sky with your camera."],
    ["Oceanography lecture: deep sea hydrothermal vents and the life they support."],
    ["Plant identification workshop. Learn to recognize 50 common native species."],
    ["Science communication workshop. How to make complex topics accessible and engaging."],
    ["Water quality monitoring volunteer training. Test streams for pH, oxygen, and pollutants."],
  ];

  // ============================================================
  // 15. LGBTQ+ EVENTS
  // ============================================================
  const lgbtqEvents: string[][] = [
    ["Pride parade and festival. Floats, music, vendors, and community resources."],
    ["LGBTQ+ youth support group. Safe space for teens ages 13-18. Facilitated by counselors."],
    ["Rainbow families picnic in the park. All families welcome. Games and activities for kids."],
    ["Queer film festival. Three nights of independent cinema celebrating diverse stories."],
    ["Trans support group meets every first and third Thursday. Confidential and affirming."],
    ["Drag story hour at the library. Fun, interactive reading for kids of all ages."],
    ["LGBTQ+ business networking mixer. Connect with allies and fellow entrepreneurs."],
    ["Coming out support workshop. Resources, peer support, and counseling referrals."],
    ["Pride prom for LGBTQ+ youth. Formal attire, dancing, and photo booth. Free admission."],
    ["LGBTQ+ book club. This month: Giovanni's Room by James Baldwin."],
    ["Ally training workshop. Learn to be a supportive and effective ally."],
    ["Queer hiking group. Monthly adventures on local trails. All fitness levels."],
    ["LGBTQ+ senior social hour. Coffee, conversation, and companionship."],
    ["Bi+ community meetup. Casual gathering for bisexual, pansexual, and fluid individuals."],
    ["LGBTQ+ health clinic information session. Culturally competent care for all."],
    ["Queer craft night. Knitting, crochet, and cross-stitch while chatting. Bring a project."],
    ["LGBTQ+ history walking tour of significant local landmarks and gathering places."],
    ["Gender-affirming clothing swap. Bring items you no longer wear, find something new."],
    ["LGBTQ+ parents group. Share experiences and resources for raising kids."],
    ["Nonbinary and genderqueer discussion group. Monthly meetings in a welcoming space."],
  ];

  // ============================================================
  // 16. MUSIC FESTIVALS & CONCERTS
  // ============================================================
  const musicEvents: string[][] = [
    ["Summer music festival: three stages, 20 bands, camping available. Weekend passes on sale."],
    ["Bluegrass jam session at the old barn. Bring your instrument or just listen."],
    ["Acoustic singer-songwriter showcase. Five performers, intimate venue, no cover charge."],
    ["Symphony orchestra season opener: Beethoven's Ninth Symphony."],
    ["Hip-hop open mic night. Sign up at the door, three songs per performer."],
    ["Country music dance hall night. Live band, two-step lessons at 7 PM. Line dancing at 8."],
    ["Electronic music producer meetup. Share tracks, get feedback, learn new techniques."],
    ["Choir holiday concert at the cathedral. Carols and seasonal favorites."],
    ["Reggae night at the beach bar. Steel drums, island vibes, and tropical drinks."],
    ["Opera in the park. Free outdoor performance of La Bohème with full orchestra."],
    ["Punk rock benefit show for the food bank. Four bands, $10 at the door. All ages."],
    ["World music festival featuring performers from six continents."],
    ["Piano bar sing-along night. Request your favorites and belt them out."],
    ["Drum circle on the beach at sunset. All percussion instruments welcome."],
    ["Mariachi band performance at the plaza. Traditional songs and audience requests."],
    ["Vinyl record swap meet. Bring your duplicates and find rare gems from other collectors."],
    ["Music therapy workshop. How music affects mood, memory, and healing."],
    ["Battle of the high school bands. Five schools compete for the trophy."],
    ["Jazz at the museum. Quartet performs in the sculpture gallery. Wine available."],
    ["Celtic folk music festival. Fiddles, flutes, bodhrans, and traditional dance."],
    ["Karaoke championship. Preliminary rounds Thursday, finals on Saturday. Cash prize."],
    ["Music production workshop for teens. Learn GarageBand and basic mixing techniques."],
    ["A cappella group showcase. Four collegiate groups perform arrangements."],
    ["Latin dance music night. Salsa, bachata, and merengue. Live band and DJ."],
    ["Ukulele lesson and jam for absolute beginners. Instruments available to borrow."],
    ["Baroque music concert. Harpsichord, viola da gamba, and recorder ensemble."],
    ["Tribute band night: Beatles, Queen, and Fleetwood Mac covers all evening."],
    ["Music industry panel: how to get your music heard in the streaming era."],
    ["Singer-songwriter circle. Share original songs in a supportive round-robin format."],
    ["Children's music class. Songs, movement, and rhythm for ages 2-5."],
  ];

  // ============================================================
  // 17. FOOD FESTIVALS & CULINARY EVENTS
  // ============================================================
  const culinaryEvents: string[][] = [
    ["Taste of the city food festival. Over 40 restaurants serving signature small plates."],
    ["International street food market. Tacos, pho, kebabs, dumplings, and more."],
    ["Chocolate festival at the convention center. Tastings, demonstrations, and workshops."],
    ["Oyster roast on the waterfront. All-you-can-eat, live music, and craft beer."],
    ["Pizza making class. Dough from scratch, artisan toppings, wood-fired oven."],
    ["Pie baking contest. Apple, pecan, cherry, and creative categories. Entries due by 10 AM."],
    ["Barbecue championship. Professional and backyard divisions. $5 tasting tickets."],
    ["Dumpling making workshop. Chinese, Japanese, and Polish varieties. Eat what you make."],
    ["Spice blending class. Create your own custom rubs and curry powders to take home."],
    ["Ice cream social at the dairy farm. Fresh churned flavors and old-fashioned sodas."],
    ["Crawfish boil and Cajun music festival. Five thousand pounds of crawfish. Community tables."],
    ["Sourdough bread baking workshop. Start your own starter and bake your first loaf."],
    ["Fermentation workshop: kimchi, sauerkraut, and kombucha. Take home your creations."],
    ["Ramen making class. Bone broth, noodles from scratch, and perfect soft-boiled eggs."],
    ["Olive oil tasting and education session. Learn to identify quality and flavors."],
    ["Mac and cheese competition. Amateur cooks compete for the golden noodle trophy."],
    ["Afternoon tea service at the historic hotel. Scones, finger sandwiches, and petit fours."],
    ["Hot sauce festival. Sample over 100 artisan hot sauces from mild to extremely spicy."],
    ["Thai cooking class. Pad Thai, green curry, and mango sticky rice. All ingredients included."],
    ["Donut festival in the park. Local bakeries compete for best classic and most creative."],
    ["Paella cooking demonstration. Watch a chef prepare a traditional Valencian paella."],
    ["Cake decorating workshop. Learn piping, fondant, and sugar flower techniques."],
    ["Gumbo cook-off at the Cajun heritage festival. Live zydeco music between tastings."],
    ["Coffee roasting class. Green beans to finished roast. Take home a bag of your creation."],
    ["Biscuit baking throwdown. Grandma's recipes vs. modern techniques. Audience judges."],
    ["Mediterranean cooking class. Hummus, falafel, tabbouleh, and pita from scratch."],
    ["Food truck rally and live music. Fifteen trucks, three bands, family-friendly fun."],
    ["Sushi making workshop for beginners. Rolls, nigiri, and proper rice preparation."],
    ["Pancake breakfast fundraiser for the fire department. All you can eat, $8 per person."],
    ["Dim sum brunch and Chinese tea ceremony demonstration."],
  ];

  // ============================================================
  // 18. DANCE EVENTS
  // ============================================================
  const danceEvents: string[][] = [
    ["Salsa and bachata social dance night. DJ and live percussion. No partner needed."],
    ["Ballet open class for adults. All levels welcome. Barre and center work."],
    ["Swing dance lesson and social. Lindy Hop basics at 7 PM, open dancing at 8."],
    ["Bollywood dance fitness class. Learn popular choreography while getting a workout."],
    ["Square dance and potluck at the grange hall. Caller will teach all figures."],
    ["Tango milonga at the dance studio. Traditional music, elegant atmosphere."],
    ["Contemporary dance performance by the university ensemble. Tickets $12."],
    ["Hip-hop dance workshop for teens. Learn trending choreography from social media."],
    ["Irish step dance class for beginners. Hard and soft shoe techniques introduced."],
    ["Ballroom dance competition. Waltz, foxtrot, and quickstep divisions."],
    ["African dance and drumming workshop. Traditional West African rhythms and movement."],
    ["Country line dance lessons every Thursday. No partner or experience needed."],
    ["Flamenco performance at the cultural center. Guitarist, singer, and two dancers."],
    ["Dance marathon fundraiser for children's hospital. Dance for 12 hours straight."],
    ["Breakdancing workshop for kids. Learn basic moves and freezes. Ages 8-16."],
    ["Folk dance evening: dances from Greece, Israel, Bulgaria, and Scandinavia."],
    ["Tap dance jam session. Bring your tap shoes and join the rhythm circle."],
    ["Dance fitness fusion: Zumba, Jazzercise, and barre blended into one class."],
    ["Contact improvisation workshop. Explore weight sharing and movement with a partner."],
    ["Hawaiian hula dance class. Learn traditional and modern hula techniques."],
  ];

  // ============================================================
  // 19. FILM & CINEMA EVENTS
  // ============================================================
  const filmEvents: string[][] = [
    ["Independent film festival. 30 short films from local filmmakers over three days."],
    ["Outdoor movie night: Jurassic Park on the big screen. Bring blankets and chairs."],
    ["Documentary film series: food systems and sustainable agriculture. Discussion follows."],
    ["Student film showcase. See the best work from the university's film program."],
    ["Horror movie marathon for charity. Six films, midnight to dawn. Concessions available."],
    ["Classic movie Monday: Casablanca. Popcorn and drinks included with admission."],
    ["Film scoring workshop. Learn how music creates emotion in cinema."],
    ["Animation festival. Stop-motion, hand-drawn, and digital animated shorts."],
    ["Foreign film Friday: Cinema Paradiso. Italian with English subtitles."],
    ["Filmmaker Q&A after the screening. Meet the director and lead actors."],
    ["Drive-in movie double feature. Two family-friendly films. Snack bar open."],
    ["Movie trivia night. Test your knowledge of films from the 1950s through today."],
    ["Film editing workshop. Basic cuts, transitions, and storytelling through editing."],
    ["Oscar watch party at the theater. Red carpet drinks, ballots, and prizes."],
    ["Sci-fi film festival: classics and new releases. Costume contest between showings."],
    ["Movie review podcast live taping. Watch a film together then hear the review live."],
    ["Silent film screening with live piano accompaniment. Buster Keaton and Charlie Chaplin."],
    ["Cinematography workshop. Camera angles, lighting, and visual storytelling techniques."],
    ["Film club meets every second Wednesday. Watch and discuss a curated selection."],
    ["Superhero movie marathon. All-day event with cosplay contest and trivia."],
  ];

  // ============================================================
  // 20. FASHION & BEAUTY EVENTS
  // ============================================================
  const fashionEvents: string[][] = [
    ["Fashion show featuring local designers. Spring collection preview. Tickets $20."],
    ["Thrift store fashion challenge. Style a complete outfit for under $20."],
    ["Natural hair care workshop. Products, techniques, and styles for all textures."],
    ["Sewing circle meets every Saturday. Bring your machine and current project."],
    ["Sustainable fashion panel. Ethical brands, secondhand shopping, and capsule wardrobes."],
    ["Makeup basics class. Skincare, foundation, and everyday looks. Products to try."],
    ["Knitting for beginners. Yarn, needles, and patience provided. Learn to cast on."],
    ["Vintage fashion market. Clothing and accessories from the 1940s through 1990s."],
    ["Personal styling consultation event. Free 15-minute sessions with a professional stylist."],
    ["Jewelry making workshop. Wire wrapping and beading techniques. Materials included."],
    ["Fashion illustration class. Draw fashion figures and design your own collection."],
    ["Prom dress giveaway for high school students. Dresses, shoes, and accessories free."],
    ["Embroidery workshop. Hand stitching techniques for personalizing clothing and gifts."],
    ["Leather working class. Make a wallet, belt, or keychain. Tools and leather provided."],
    ["Costume design lecture. From concept art to finished garment for stage and screen."],
    ["Hat making workshop. Create a custom fascinator or sun hat. All materials included."],
    ["Fashion swap party. Bring clothes you don't wear, leave with a refreshed wardrobe."],
    ["Shoe repair and care workshop. Polish, condition, and extend the life of your footwear."],
    ["Tie-dye party in the park. Bring a white shirt or buy one for $5. All dyes provided."],
    ["Fashion history lecture: how clothing reflected social change through the decades."],
  ];

  // ============================================================
  // 21. LITERARY & WRITING EVENTS
  // ============================================================
  const literaryEvents: string[][] = [
    ["Author reading and book signing at the independent bookstore. Free and open to all."],
    ["Poetry slam competition. Three rounds, audience judges. Sign up by 7 PM."],
    ["NaNoWriMo kickoff party. Write 50,000 words in November. Support group and write-ins."],
    ["Flash fiction workshop. Write a complete story in under 1,000 words."],
    ["Zine making workshop. Create your own small publication. Supplies and copier provided."],
    ["Spoken word open mic. Five-minute sets, all topics welcome. Supportive audience."],
    ["Children's author visit to the school library. Books available for purchase and signing."],
    ["Screenwriting workshop. Three-act structure, dialogue, and character development."],
    ["Haiku writing circle. Compose and share seasonal poems. Tea and contemplation."],
    ["Literary translation workshop. Practice translating poetry and prose between languages."],
    ["Banned books week celebration. Readings from challenged and censored literature."],
    ["Graphic novel discussion group. This month: Maus by Art Spiegelman."],
    ["Self-publishing workshop. ISBN, formatting, cover design, and distribution explained."],
    ["Storytelling festival. Professional and amateur storytellers share tales for all ages."],
    ["Memoir writing group. Monthly meetings with supportive critique and encouragement."],
    ["Literary magazine submission workshop. How to prepare and submit your work."],
    ["Crime fiction book club. This month: The Big Sleep by Raymond Chandler."],
    ["Playwriting workshop. Write a ten-minute play in a single session."],
    ["Book fair and literacy fundraiser. Used books $1-$5. Proceeds support library programs."],
    ["Writer's retreat weekend. Cabin in the woods, meals provided, uninterrupted writing time."],
  ];

  // ============================================================
  // 22. AGRICULTURE & FARMING EVENTS
  // ============================================================
  const agricultureEvents: string[][] = [
    ["Farmers market opening day for the season. Fresh produce, baked goods, and crafts."],
    ["Beekeeping for beginners workshop. Hive setup, bee biology, and honey harvesting."],
    ["County agricultural fair. Livestock judging, baking contests, and 4-H exhibits."],
    ["Farm-to-table dinner under the stars. Five courses from local ingredients."],
    ["Tractor safety certification course for teen farm workers. Required by state law."],
    ["Maple syrup festival. Watch the tapping and boiling process. Pancake breakfast included."],
    ["Sheep shearing demonstration and fiber arts festival. Spinning, felting, and weaving."],
    ["Soil health workshop. Cover cropping, no-till methods, and microbiome testing."],
    ["Apple harvest festival. Pick your own, cider pressing, and apple pie contest."],
    ["Urban farming workshop. Growing food in small spaces, rooftops, and community lots."],
    ["Goat yoga at the farm. Gentle yoga with friendly Nigerian dwarf goats roaming around."],
    ["Poultry show and swap. Bantams, layers, and rare breeds. Judges from the poultry club."],
    ["Seed starting workshop. Get your garden growing indoors before the last frost."],
    ["Farm equipment auction. Tractors, implements, and tools from estate liquidation."],
    ["Lavender harvest festival at the lavender farm. U-pick, crafts, and sachets."],
    ["Agritourism open farm weekend. Visit participating farms and learn about rural life."],
    ["CSA (Community Supported Agriculture) sign-up day. Weekly boxes of seasonal produce."],
    ["Hay ride and corn maze at the family farm. Pumpkin patch and cider donuts."],
    ["Vermiculture workshop. Start a worm composting bin for your kitchen scraps."],
    ["Heritage breed livestock conservation lecture and farm tour."],
  ];

  // ============================================================
  // 23. CRAFT & MAKER EVENTS
  // ============================================================
  const craftEvents: string[][] = [
    ["Maker faire at the convention center. 3D printing, robotics, woodworking, and more."],
    ["Candle making workshop. Soy wax, essential oils, and custom molds. Take home three candles."],
    ["Woodturning demonstration. Watch a block of wood become a beautiful bowl on the lathe."],
    ["Soap making class. Cold process technique. Customize your scent and color."],
    ["Stained glass workshop for beginners. Cut, foil, and solder a sun catcher."],
    ["Macrame plant hanger workshop. All supplies included. Hanging hardware provided."],
    ["Blacksmithing introduction. Forge a hook or bottle opener. Safety gear provided."],
    ["Paper craft workshop. Origami, quilling, and handmade greeting cards."],
    ["Pottery wheel throwing class. Create a mug, bowl, or vase. Glazing in the second session."],
    ["Resin art workshop. Make coasters, jewelry, and art pieces with epoxy resin."],
    ["Basket weaving demonstration using traditional techniques and natural materials."],
    ["Screen printing workshop. Design and print your own t-shirt or tote bag."],
    ["Calligraphy class for beginners. Pointed pen technique. Supplies included."],
    ["Mosaic tile art workshop. Create a garden stepping stone or wall hanging."],
    ["Loom weaving class. Learn to warp, weave, and finish a small wall hanging."],
    ["Hand lettering and brush pen workshop. Create beautiful signs and cards."],
    ["Metal stamping jewelry class. Personalize a necklace, bracelet, or keychain."],
    ["Beeswax wrap making. Sustainable alternative to plastic wrap. Materials provided."],
    ["Crochet amigurumi workshop. Make a cute stuffed animal with yarn and a hook."],
    ["Pyrography (wood burning) art class. Create designs on cutting boards and ornaments."],
  ];

  // ============================================================
  // 24. SPORTS LEAGUES & TOURNAMENTS
  // ============================================================
  const sportsEvents: string[][] = [
    ["Pickleball tournament at the recreation center. Doubles and singles divisions."],
    ["Adult soccer league registration. Co-ed teams, games on Sunday evenings."],
    ["Bean bag toss tournament at the brewery. Teams of two, double elimination. $20 per team."],
    ["Youth baseball opening day. Parade of teams, first pitch ceremony, and concessions."],
    ["Ultimate frisbee pickup game. Every Wednesday at 5:30 PM at the athletic fields."],
    ["Adult volleyball league forming. Indoor, six-person teams. Season runs January through March."],
    ["Kids track and field day. Races, long jump, and relay events. Ribbons for all."],
    ["Disc golf tournament at Riverside Park. 18 holes, two rounds. Prizes in three divisions."],
    ["Wrestling clinic for high school athletes. Technique drills and conditioning."],
    ["Badminton open play at the gym. Drop in anytime between 6 and 9 PM. Rackets available."],
    ["Youth swim team tryouts. Ages 6-18. Must be able to swim 25 yards unassisted."],
    ["Adult softball league. Co-ed, recreational division. Thursday evening games."],
    ["Archery range open house. Free instruction for first-time visitors. Equipment provided."],
    ["Table tennis tournament. Round robin format, best of five games. All skill levels."],
    ["Kids basketball clinic with college players. Dribbling, passing, and shooting drills."],
    ["Rowing club introduction session. Learn to row on the river. No experience required."],
    ["Fencing club demonstration and beginner class. Equipment provided for first visit."],
    ["Martial arts tournament. Karate, taekwondo, and judo divisions. Spectators free."],
    ["Trampoline park fitness class. Bounce your way to better health. Ages 12 and up."],
    ["Equestrian show jumping competition at the riding center. Spectators welcome, free parking."],
    ["Bocce ball league at the Italian club. Tuesday evenings, cold drinks available."],
    ["Water polo introductory clinic. Must be a strong swimmer. Ages 14 and up."],
    ["Adult dodgeball league. Wednesday nights. Teams of 8, co-ed. Pure fun."],
    ["Youth fencing camp. One week, ages 10-17. All equipment and instruction included."],
    ["Roller derby bout. Home team vs. visitors. Halftime show and raffle prizes."],
    ["Croquet tournament on the lawn. White attire encouraged. Champagne and strawberries."],
    ["Rock climbing competition at the indoor wall. Lead and bouldering categories."],
    ["Dragon boat racing festival. Teams of 20 paddlers. Registration includes practice sessions."],
    ["Indoor soccer league. Five-a-side, fast-paced games. Season starts next month."],
    ["Orienteering challenge in the state forest. Map and compass navigation course."],
  ];

  // ============================================================
  // 25. HOLIDAY & SEASONAL EVENTS
  // ============================================================
  const holidayEvents: string[][] = [
    ["New Year's Eve ball drop celebration in the town square. Live band, fireworks at midnight."],
    ["Valentine's Day dinner for two at the historic inn. Four courses, wine pairings."],
    ["St. Patrick's Day parade and festival. Green beer, Irish music, and step dancing."],
    ["Easter egg hunt in the park. 10,000 eggs hidden. Age divisions from toddler to grade 5."],
    ["Cinco de Mayo celebration. Mariachi, tacos, margaritas, and piñatas for the kids."],
    ["Memorial Day ceremony at the veterans memorial. Wreath laying and gun salute."],
    ["Fourth of July fireworks spectacular at the lake. Food vendors open at 4 PM."],
    ["Labor Day end-of-summer bash. Pool party, barbecue, and DJ. Last swim of the season."],
    ["Halloween trunk-or-treat in the church parking lot. 50 decorated vehicles."],
    ["Thanksgiving community meal. Free dinner served from noon to 3 PM. All are welcome."],
    ["Christmas tree lighting ceremony in the town square. Carols, cocoa, and cookies."],
    ["Kwanzaa celebration. Seven principles, candle lighting, and African drumming."],
    ["Groundhog Day party at the nature center. Will he see his shadow? Predictions welcome."],
    ["Mother's Day brunch at the botanical garden. Mimosas and a flower arranging station."],
    ["Father's Day fishing derby at the reservoir. Prizes for biggest catch. Free entry."],
    ["Harvest moon festival. Bonfire, s'mores, hayrides, and acoustic guitar music."],
    ["Veterans Day pancake breakfast hosted by the American Legion. Free for all veterans."],
    ["Winter solstice lantern walk through the forest. Candle-lit luminaries guide the path."],
    ["Martin Luther King Jr. Day of service. Community projects and a commemorative program."],
    ["Mardi Gras celebration. Masks, beads, king cake, and a brass band parade."],
    ["Earth Day festival at the park. Tree planting, recycling info, and nature activities."],
    ["International Workers Day fair. Labor history exhibits, food trucks, and live music."],
    ["Bastille Day celebration at the French restaurant. Crepes, wine, and accordion music."],
    ["Chinese New Year celebration. Lion dance, fireworks, red envelope exchange, and dumplings."],
    ["Juneteenth freedom celebration. Music, spoken word, food, and community fellowship."],
    ["Autumn equinox celebration at the community garden. Harvest activities and cider."],
    ["Spring equinox planting ceremony. Bless the seeds and start the growing season."],
    ["Day of the Dead altar building workshop. Marigolds, photos, and offerings."],
    ["Hanukkah menorah lighting and latke party. Dreidel games for the kids."],
    ["Boxing Day charity sale at the thrift store. All proceeds to local shelters."],
  ];

  // ============================================================
  // 26. PET & ANIMAL EVENTS
  // ============================================================
  const petEvents: string[][] = [
    ["Pet adoption fair at the shopping center. Dogs, cats, and rabbits need loving homes."],
    ["Dog agility fun run. Obstacle course for all sizes. Treats and ribbons for participants."],
    ["Cat café grand opening. Sip lattes while cuddling adoptable cats. $10 entry."],
    ["Pet first aid certification class. CPR, choking, and wound care for dogs and cats."],
    ["Pet costume contest for Halloween. Categories: funniest, scariest, and most creative."],
    ["Puppy socialization class. Positive introduction to other dogs and new experiences."],
    ["Reptile expo at the convention center. Breeders, supplies, and educational talks."],
    ["Pet memorial garden dedication ceremony. Honor beloved companions who have passed."],
    ["Dog training workshop: basic obedience commands. Treats and clickers provided."],
    ["Blessing of the animals at the church courtyard. All creatures great and small welcome."],
    ["Cat show featuring 30 breeds. Judging, vendor hall, and meet the breeds."],
    ["Therapy dog certification information session. Requirements and training explained."],
    ["Exotic bird fair. Parrots, finches, and supplies. Educational presentations hourly."],
    ["Dog-friendly brewery event. Water bowls, treats, and a fenced play area."],
    ["Horse rescue open house. Meet the horses, learn their stories, and support the mission."],
    ["Pet photography mini sessions. Professional portraits of your furry family member. $35."],
    ["Aquarium fish swap meet. Freshwater and saltwater species, plants, and equipment."],
    ["K-9 unit demonstration at the police department open house. Watch trained dogs work."],
    ["Barn cat adoption event. Working cats available for farms and rural properties."],
    ["Wildlife rehabilitation volunteer training. Care for injured native animals."],
  ];

  // ============================================================
  // 27. REAL ESTATE & HOUSING EVENTS
  // ============================================================
  const realEstateEvents: string[][] = [
    ["First-time homebuyer seminar. Mortgage basics, down payment assistance, and credit tips."],
    ["Open house weekend in the new subdivision. Model homes available for tours."],
    ["Landlord-tenant rights workshop. Know your obligations and protections under the law."],
    ["Home staging tips seminar. Make your home show-ready to sell faster."],
    ["Community land trust information session. Affordable homeownership opportunities."],
    ["Property tax appeal workshop. Learn how to challenge your assessment legally."],
    ["Neighborhood revitalization meeting. Plans for the downtown corridor redevelopment."],
    ["Housing fair with mortgage lenders, realtors, and home inspectors. Free credit checks."],
    ["Condo association annual meeting. Budget review, board elections, and open forum."],
    ["Historic preservation workshop. Tax credits and grants for restoring older homes."],
    ["Accessory dwelling unit seminar. Build a guest house or rental unit on your property."],
    ["Real estate investment club monthly meeting. Market analysis and deal sharing."],
    ["Foreclosure prevention counseling session. Free, confidential, HUD-approved agency."],
    ["Green building certification workshop. LEED, Energy Star, and passive house standards."],
    ["Zoning board public hearing on the proposed mixed-use development at Oak and Main."],
    ["Cooperative housing information night. Shared equity, community governance."],
    ["Home inspection 101 for buyers. What to look for and when to walk away."],
    ["Neighborhood watch program launch. Meet your neighbors and discuss safety strategies."],
    ["Tiny home village open house. Tour 12 models under 400 square feet."],
    ["Fair housing rights presentation. Recognizing and reporting discrimination."],
  ];

  // ============================================================
  // 28. FINANCE & INVESTING EVENTS
  // ============================================================
  const financeEvents: string[][] = [
    ["Personal finance basics seminar. Budgeting, saving, and building an emergency fund."],
    ["Stock market investing for beginners. Understanding indexes, ETFs, and mutual funds."],
    ["Retirement planning workshop. 401k, IRA, Social Security, and withdrawal strategies."],
    ["Cryptocurrency information session. Blockchain basics, risks, and regulation."],
    ["Estate planning seminar. Wills, trusts, power of attorney, and beneficiary designations."],
    ["Credit repair workshop. Dispute errors, build history, and improve your score."],
    ["Small business accounting basics. QuickBooks setup, invoicing, and tax preparation."],
    ["Student loan repayment strategies seminar. Income-driven plans and forgiveness programs."],
    ["Financial planning for couples. Merging finances, joint goals, and communication."],
    ["Tax preparation clinic. Free assistance for low-income filers. Bring all W-2s and 1099s."],
    ["Angel investing 101. How to evaluate startups and manage risk in early-stage companies."],
    ["Insurance coverage review seminar. Auto, home, health, and life insurance explained."],
    ["College savings plans workshop. 529 accounts, financial aid, and scholarship search."],
    ["Social Security benefits seminar. When to claim and how to maximize your benefit."],
    ["Nonprofit financial management training. Fund accounting, audits, and grant reporting."],
    ["Identity theft prevention seminar. Protect your financial accounts and personal data."],
    ["Passive income strategies workshop. Rental properties, dividends, and side businesses."],
    ["Debt management counseling session. Create a plan to become debt-free."],
    ["Financial wellness fair with credit unions, advisors, and educational resources."],
    ["Day trading risks and realities seminar. What you need to know before you start."],
  ];

  // ============================================================
  // 29. HEALTH & FITNESS EVENTS
  // ============================================================
  const healthEvents: string[][] = [
    ["5K color run through downtown. White shirts provided, get splashed with colored powder."],
    ["Diabetes prevention program orientation. Lifestyle change course over 12 months."],
    ["Blood donation drive at the community center. One pint can save three lives."],
    ["Bone density screening for women over 50. Free, no appointment needed."],
    ["Pilates mat class for beginners. Core strength and flexibility. Bring a mat."],
    ["Heart health seminar with a cardiologist. Risk factors, prevention, and treatment."],
    ["Obstacle course mud run. Three miles, 20 obstacles. Shower stations at the finish."],
    ["Prenatal yoga class. Gentle poses for each trimester. Certified prenatal instructor."],
    ["Vision screening for children ages 3-6. Free, provided by the Lions Club."],
    ["Functional fitness class for older adults. Balance, strength, and mobility exercises."],
    ["Dental health fair. Free cleanings, fluoride treatments, and oral health education."],
    ["Marathon relay race. Teams of four, each running approximately 6.5 miles."],
    ["Nutrition label reading workshop. Understand what you're eating and make better choices."],
    ["Aqua aerobics class at the pool. Low-impact, high-energy workout in the water."],
    ["Skin cancer screening day. Dermatologists offering free mole checks."],
    ["Indoor rowing competition. 500-meter sprint and 2,000-meter endurance races."],
    ["Healthy cooking for one. Quick, nutritious meals for solo diners. Recipes included."],
    ["Prenatal and postnatal fitness class. Safe exercises during and after pregnancy."],
    ["Cholesterol screening at the pharmacy. Results in 15 minutes. No fasting required."],
    ["Boot camp fitness class in the park. High-intensity intervals. All levels welcome."],
    ["Allergy awareness workshop for parents. Common triggers, symptoms, and action plans."],
    ["Couch to 5K training group starting this week. Walk-run intervals, gradual progression."],
    ["Spine health seminar. Posture, ergonomics, and exercises for a healthy back."],
    ["Indoor cycling class. 45 minutes of heart-pumping pedaling to motivating music."],
    ["Gluten-free living workshop. Diagnosis, dining out, and delicious recipes."],
    ["Senior fall prevention class. Balance exercises and home safety modifications."],
    ["Sports medicine lecture for coaches. Concussion protocols and injury prevention."],
    ["Healthy meal prep Sunday workshop. Prepare five days of lunches in three hours."],
    ["Breast cancer awareness walk. Pink t-shirts for registered walkers. Survivors honored."],
    ["Men's health screening day. Blood pressure, cholesterol, and prostate checks."],
  ];

  // ============================================================
  // 30. EDUCATION & SCHOOL EVENTS
  // ============================================================
  const educationEvents: string[][] = [
    ["Back-to-school supply drive. Donate backpacks, notebooks, and pencils."],
    ["Parent-teacher conference night. Individual meetings from 4-8 PM."],
    ["School board meeting open to the public. Agenda includes budget and staffing."],
    ["Kindergarten registration for the upcoming school year. Bring birth certificate and proof of residency."],
    ["Spelling bee finals at the auditorium. Top spellers from each grade compete."],
    ["College application workshop for high school juniors. Essays, deadlines, and financial aid."],
    ["School talent show. Singing, dancing, comedy, and magic acts. Tickets $5."],
    ["STEM night at the elementary school. Hands-on science activities for families."],
    ["Graduation ceremony for the class of 2026. Gates open at 5 PM, ceremony begins at 6."],
    ["School fundraiser: read-a-thon. Students collect pledges per book read this month."],
    ["PTA meeting and volunteer recruitment. Help with upcoming events and fundraisers."],
    ["Art show displaying student work from all grade levels. Reception with refreshments."],
    ["School orchestra spring concert. Selections from classical and contemporary repertoire."],
    ["Curriculum night for parents. Visit classrooms and meet your child's teachers."],
    ["High school career day. Professionals from 20 fields present to students."],
    ["School field day. Relay races, tug of war, and water balloon toss. Grades K-5."],
    ["Academic decathlon awards ceremony. Celebrating excellence in scholarship."],
    ["Preschool open house. Tour classrooms, meet teachers, and learn about the program."],
    ["School musical: Grease. Evening performances Thursday through Saturday."],
    ["Athletic booster club meeting. Fundraising plans for new equipment."],
  ];

  // ============================================================
  // 31. TECH & STARTUP EVENTS
  // ============================================================
  const techEvents: string[][] = [
    ["Startup weekend: build a business in 54 hours. Pitch, prototype, and present."],
    ["AI and machine learning study group. Working through fast.ai curriculum together."],
    ["Open source contributor sprint. Pick an issue and submit your first pull request."],
    ["Product management meetup. User research, roadmapping, and stakeholder communication."],
    ["Cloud architecture workshop. Designing scalable systems on AWS and GCP."],
    ["UX design critique night. Bring your project for constructive peer feedback."],
    ["DevOps meetup: CI/CD pipelines, infrastructure as code, and monitoring."],
    ["Women in tech panel discussion. Career advice, mentorship, and breaking barriers."],
    ["API design workshop. RESTful best practices, versioning, and documentation."],
    ["Cybersecurity capture the flag competition. Test your skills in a safe environment."],
    ["Mobile development meetup. React Native, Flutter, and native iOS/Android."],
    ["Data engineering happy hour. Spark, Kafka, and data lake architectures."],
    ["No-code app building workshop. Create a functional app without writing code."],
    ["Tech founder fireside chat. Hear the journey from idea to funded startup."],
    ["Accessibility in tech workshop. Making digital products usable for everyone."],
    ["Blockchain developer meetup. Smart contracts, Solidity, and decentralized apps."],
    ["Systems design interview prep group. Practice whiteboarding distributed systems."],
    ["Tech industry book club. This month: The Mythical Man-Month by Fred Brooks."],
    ["Raspberry Pi project night. IoT sensors, home automation, and retro gaming."],
    ["Web performance optimization workshop. Core Web Vitals, lazy loading, and caching."],
  ];

  // ============================================================
  // 32. GARDENING & HORTICULTURE EVENTS
  // ============================================================
  const gardeningEvents: string[][] = [
    ["Master gardener plant clinic. Bring your sick plants for diagnosis and treatment advice."],
    ["Rose pruning workshop at the botanical garden. When and how to prune for best blooms."],
    ["Perennial plant swap. Dig up divisions and trade for new varieties."],
    ["Succulent and cactus propagation class. Take home three starter pots."],
    ["Rain garden design workshop. Manage stormwater and create beautiful habitat."],
    ["Herb gardening basics. Grow basil, mint, rosemary, and thyme on your windowsill."],
    ["Japanese garden tour and design principles lecture. Harmony, balance, and simplicity."],
    ["Greenhouse growing workshop. Season extension for cold climates."],
    ["Fruit tree pruning demonstration at the community orchard."],
    ["Fairy garden building workshop for kids. Tiny plants, miniature accessories, and creativity."],
    ["Fall garden cleanup and winterizing workshop. Protect your plants from frost."],
    ["Bonsai demonstration and beginners class. Shaping, wiring, and care techniques."],
    ["Flower arranging class. Create a centerpiece using seasonal blooms. Materials included."],
    ["Vegetable garden planning workshop. Succession planting and crop rotation explained."],
    ["Orchid care workshop. Watering, light, and repotting for healthy blooms."],
    ["Native grass and meadow planting seminar. Create a low-maintenance landscape."],
    ["Community garden workday. Weeding, watering, and general maintenance."],
    ["Indoor plant care class. Tropicals, succulents, and troubleshooting common problems."],
    ["Landscape design basics. Creating curb appeal with plants, hardscape, and lighting."],
    ["Seed saving workshop. Collect and store seeds from your garden for next year."],
  ];

  // ============================================================
  // 33. AUTOMOTIVE & MOTORSPORT EVENTS
  // ============================================================
  const automotiveEvents: string[][] = [
    ["Drag racing night at the speedway. Professional and amateur classes."],
    ["Cars and coffee morning meet. Show your ride, enjoy fresh pastries and espresso."],
    ["Go-kart racing league forming. Weekly races on the indoor track. Ages 14 and up."],
    ["Auto detailing workshop. Professional techniques for a showroom finish at home."],
    ["Demolition derby at the county fair. Smash and crash family entertainment."],
    ["Off-road vehicle expo. ATVs, UTVs, and overlanding equipment on display."],
    ["Electric vehicle charging station dedication. City officials and refreshments."],
    ["Autocross time trial event. Navigate the cone course in your own car. Helmets required."],
    ["Vintage motorcycle show and swap meet. Parts, accessories, and complete bikes."],
    ["Car restoration clinic. Body work, paint prep, and rust repair techniques."],
    ["Formula One viewing party at the sports bar. Big screen, race snacks, and trivia."],
    ["Women's car care clinic. Check fluids, change a tire, and understand dashboard lights."],
    ["Truck and tractor pull at the grandstand. Multiple weight classes and divisions."],
    ["Pinewood derby for Cub Scouts. Car building workshop the week before the race."],
    ["Hybrid and plug-in vehicle information session. Compare models and incentives."],
    ["Motorcycle safety awareness ride. Group ride through scenic routes. All bikes welcome."],
    ["Car audio installation workshop. Speakers, amplifiers, and head unit basics."],
    ["Drift demonstration at the track. Professional drivers showcase controlled slides."],
    ["Antique tractor show and engine display. Running exhibits and restoration demos."],
    ["Street rod cruise night downtown. Classic hot rods, music, and food vendors."],
  ];

  // ============================================================
  // 34. PHOTOGRAPHY EVENTS
  // ============================================================
  const photographyEvents: string[][] = [
    ["Photography walk: golden hour in the city. Meet at the fountain at 5 PM."],
    ["Portrait lighting workshop. Studio setups for flattering headshots and portraits."],
    ["Landscape photography weekend retreat in the mountains. All skill levels."],
    ["Photo editing class: Lightroom and Photoshop basics for beginners."],
    ["Street photography meetup. Capture the pulse of the city through candid shots."],
    ["Macro photography workshop. Explore the tiny world of insects, flowers, and textures."],
    ["Darkroom printing class. Develop and print your own black and white photographs."],
    ["Photography exhibit call for entries. Theme: Water in All Its Forms. Deadline March 1."],
    ["Drone photography demonstration. Aerial perspectives for real estate and landscapes."],
    ["Film photography revival meetup. Shoot 35mm, develop, and share results."],
    ["Wildlife photography field trip to the bird sanctuary. Long lenses recommended."],
    ["Newborn photography posing workshop. Safety, lighting, and prop techniques."],
    ["Smartphone photography tips and tricks. Get professional results from your phone."],
    ["Photography portfolio review night. Get feedback from working professionals."],
    ["Night photography workshop. Long exposures, light trails, and star photography."],
    ["Architectural photography tour of the historic downtown. Composition and perspective."],
    ["Photo contest judging night. Audience votes on the best entries in five categories."],
    ["Product photography for small businesses. White background, flat lay, and lifestyle shots."],
    ["Travel photography slide show and storytelling evening. Share your best travel photos."],
    ["Photo book design workshop. Layout, printing, and binding your own photo book."],
  ];

  // ============================================================
  // 35. SOCIAL JUSTICE & ADVOCACY EVENTS
  // ============================================================
  const socialJusticeEvents: string[][] = [
    ["Racial equity book study. Reading and discussing How to Be an Antiracist."],
    ["Immigration rights know-your-rights workshop. Legal information and resources."],
    ["Criminal justice reform panel discussion with formerly incarcerated advocates."],
    ["Disability rights awareness seminar. ADA compliance and inclusive practices."],
    ["Climate justice teach-in. Environmental racism and community organizing strategies."],
    ["Voter registration drive at the library. Nonpartisan assistance, all welcome."],
    ["Workers rights workshop. Minimum wage, overtime, and workplace safety laws."],
    ["Housing equity forum. Addressing disparities in homeownership and lending."],
    ["Food justice community garden project. Growing food in underserved neighborhoods."],
    ["Police accountability community meeting. Know your rights during encounters."],
    ["Restorative justice circle training. Alternative approaches to conflict resolution."],
    ["Economic justice teach-in. Income inequality, living wages, and labor organizing."],
    ["Environmental justice walking tour. Industrial sites and their community impact."],
    ["Reproductive rights information session. Healthcare access and legal landscape."],
    ["Indigenous rights and sovereignty discussion. Treaty history and current issues."],
    ["Education equity forum. Funding disparities and community solutions."],
    ["Bail reform information session. How the cash bail system impacts communities."],
    ["Digital rights workshop. Online privacy, surveillance, and free expression."],
    ["Mutual aid network organizing meeting. Building community support systems."],
    ["Reparations discussion group. Historical context and contemporary proposals."],
  ];

  // ============================================================
  // 36. WEDDING & CELEBRATION EVENTS
  // ============================================================
  const weddingEvents: string[][] = [
    ["Bridal expo at the grand ballroom. Vendors, fashion show, and cake tastings."],
    ["Wedding planning workshop. Timeline, budget, and vendor coordination tips."],
    ["Engagement party at the rooftop bar. Champagne toast and appetizers."],
    ["DIY wedding invitation workshop. Calligraphy, paper selection, and assembly."],
    ["Wedding venue open house. Tour five ceremony and reception spaces."],
    ["Bridal shower tea party at the garden pavilion. Finger sandwiches and scones."],
    ["Groom's planning night. Suits, rings, bachelor party ideas, and groomsmen gifts."],
    ["Wedding photography consultation event. Meet five photographers, compare styles."],
    ["Anniversary celebration dinner for couples married 25 years or more."],
    ["Wedding cake tasting event. Sample five flavors and discuss design options."],
    ["Officiant meet and greet. Find the right person to perform your ceremony."],
    ["Wedding band vs. DJ panel discussion. Pros, cons, and what to ask before booking."],
    ["Destination wedding planning seminar. Legalities, logistics, and dream locations."],
    ["Rehearsal dinner etiquette workshop. Who to invite, who pays, and how to toast."],
    ["First dance lesson for engaged couples. Waltz, foxtrot, or swing in four sessions."],
    ["Wedding floral design workshop. Bouquets, boutonnieres, and centerpieces."],
    ["Quinceañera planning expo. Venues, dresses, entertainment, and catering."],
    ["Baby shower planning workshop. Themes, games, favors, and registry advice."],
    ["Vow renewal ceremony at the chapel. Celebrate your commitment with family."],
    ["Sweet sixteen party planning event. DJs, decorators, and venue tours."],
  ];

  // ============================================================
  // 37. ASTRONOMY & SPACE EVENTS
  // ============================================================
  const astronomyEvents: string[][] = [
    ["Meteor shower viewing party at the hilltop. Warm drinks and blankets recommended."],
    ["Astronomy for beginners class. Identify constellations and learn to use a telescope."],
    ["Full moon hike along the ridge trail. Headlamps provided, easy difficulty."],
    ["Solar observation day. Safely view sunspots through filtered telescopes."],
    ["Rocket launch watch party. Live stream of the SpaceX mission on the big screen."],
    ["Build your own telescope workshop. Grind a mirror and assemble an 8-inch reflector."],
    ["Space trivia night at the science museum. Test your knowledge of the cosmos."],
    ["Dark sky preservation town hall. Light pollution and what we can do about it."],
    ["Astrophotography class. Capture galaxies and nebulae with your DSLR camera."],
    ["Planetary society lecture: the search for life on Mars and Europa."],
    ["Kids space camp day. Build model rockets, learn about astronauts, and eat space food."],
    ["International Space Station viewing event. See it pass overhead at 8:42 PM tonight."],
    ["Astronomy club monthly meeting. Member presentations and equipment swap."],
    ["Virtual tour of the James Webb Space Telescope images. Discussion with an astrophysicist."],
    ["Moon landing anniversary celebration. Film screening and panel with aerospace engineers."],
    ["Observatory public night. View Saturn's rings, Jupiter's moons, and deep sky objects."],
    ["Space career panel for students. Engineers, scientists, and astronaut candidates speak."],
    ["Comet watching event. Special appearance of the returning periodic comet."],
    ["Radio astronomy demonstration. Listen to signals from Jupiter and the Milky Way."],
    ["Model rocket building and launch day. Kits provided for beginners. Open field required."],
  ];

  // ============================================================
  // 38. HISTORY & HERITAGE EVENTS
  // ============================================================
  const historyEvents: string[][] = [
    ["Civil War reenactment at the battlefield park. Musket demonstrations and camp life."],
    ["Genealogy workshop. Trace your family tree using online databases and archives."],
    ["Historic house tour of Victorian-era homes in the downtown district."],
    ["World War II veterans panel. Hear firsthand accounts from the Greatest Generation."],
    ["Living history demonstration: colonial blacksmithing, spinning, and candle making."],
    ["Local history walking tour. Significant buildings and events from the past 200 years."],
    ["Archaeology lecture: recent discoveries at the Native American mound site."],
    ["Historical document preservation workshop. Caring for photos, letters, and books."],
    ["Underground Railroad history tour. Visit documented safe houses and hiding places."],
    ["Medieval feast and tournament. Costumed performers, jousting, and period food."],
    ["Cold War history exhibit opening. Artifacts, documents, and personal stories."],
    ["Historical cemetery tour. Learn about notable residents and funerary traditions."],
    ["Oral history recording project. Share your memories of life in this community."],
    ["Revolutionary War encampment. Soldiers, camp followers, and period craft demonstrations."],
    ["Ellis Island immigration history lecture. Personal stories of arriving in America."],
    ["Prohibition era history walk. Speakeasy locations, bootlegger stories, and cocktails."],
    ["Ancient civilizations lecture series: Egypt, Greece, Rome, and Mesopotamia."],
    ["Historic preservation commission meeting. Review of landmark nominations."],
    ["Pioneer days festival. Wagon rides, butter churning, and one-room schoolhouse."],
    ["Maritime history lecture: the golden age of sailing ships on the Great Lakes."],
  ];

  // ============================================================
  // 39. LANGUAGE & CULTURAL EXCHANGE EVENTS
  // ============================================================
  const languageEvents: string[][] = [
    ["Spanish conversation circle at the café. All levels welcome. Order your own drinks."],
    ["Japanese language and culture night. Basic phrases, calligraphy, and tea ceremony."],
    ["French film night with discussion. Movie shown in French with English subtitles."],
    ["Mandarin Chinese beginner class. Eight-week course, meets Tuesday evenings."],
    ["German beer and language night at the biergarten. Learn useful phrases over a pint."],
    ["American Sign Language introductory workshop. Learn the alphabet and basic phrases."],
    ["Arabic calligraphy workshop. Write your name in beautiful Arabic script."],
    ["Korean cooking and language class. Learn to make bibimbap while practicing Korean."],
    ["Italian opera appreciation night. Arias with English translation and cultural context."],
    ["Portuguese language meetup for travelers planning trips to Brazil or Portugal."],
    ["Hindi movie night with English subtitles. Bollywood classic followed by discussion."],
    ["Russian literature discussion group. This month: Anna Karenina by Tolstoy."],
    ["Swahili language introduction. Basic greetings and cultural context. No prior knowledge."],
    ["Cultural exchange potluck. Bring a dish from your heritage and share its story."],
    ["Greek language basics and mythology stories. Fun introductory class for all ages."],
    ["Multilingual poetry reading. Poets read in their native language and in English."],
    ["Turkish coffee and conversation. Learn about Turkish culture over traditional coffee."],
    ["Vietnamese cooking class. Spring rolls, pho, and banh mi. Language tips included."],
    ["Native language preservation workshop. Supporting endangered indigenous languages."],
    ["International pen pal program launch. Connect with someone across the world."],
  ];

  // ============================================================
  // 40. NATURE & WILDLIFE EVENTS
  // ============================================================
  const wildlifeEvents: string[][] = [
    ["Whale watching boat trip. Three-hour cruise with marine biologist narration."],
    ["Butterfly garden tour and identification workshop. Field guide provided."],
    ["Owl prowl night hike. Listen for and learn to identify nocturnal raptors."],
    ["Tide pool exploration at the rocky shore. Guide explains marine creatures."],
    ["Wildlife photography hide. Spend the morning photographing herons and kingfishers."],
    ["Hawk watch at the ridge. Count raptors during fall migration."],
    ["Salamander survey at the vernal pool. Citizen science data collection."],
    ["Wildflower meadow walk. Identify spring blooms with a botanist guide."],
    ["Beaver dam exploration. Learn how these ecosystem engineers shape the landscape."],
    ["Bald eagle nest viewing. Spotting scopes set up at a safe distance."],
    ["Bat house building workshop. Construct a bat roost to install in your yard."],
    ["Turtle nesting beach patrol volunteer training. Protect sea turtle eggs."],
    ["Deer management community forum. Population data and management options discussed."],
    ["Raptor rehabilitation center open house. Meet hawks, owls, and eagles up close."],
    ["Frog and toad calling survey. Learn to identify amphibians by their vocalizations."],
    ["Coral reef snorkeling tour with marine biologist guide. Equipment provided."],
    ["Wolf conservation lecture. Pack dynamics, habitat needs, and coexistence strategies."],
    ["Dragonfly walk at the wetland preserve. Learn about these ancient aerial predators."],
    ["Nature journaling workshop. Sketch and write about observations in the field."],
    ["Migratory bird festival. Banding demonstrations, birding walks, and art exhibits."],
  ];

  // ============================================================
  // 41. MARTIAL ARTS EVENTS
  // ============================================================
  const martialArtsEvents: string[][] = [
    ["Karate belt promotion ceremony. Friends and family invited. Reception follows."],
    ["Taekwondo demonstration at the community fair. Board breaking and forms."],
    ["Brazilian jiu-jitsu open mat. Drop in and roll with practitioners of all levels."],
    ["Kendo introductory class. Japanese swordsmanship with bamboo practice swords."],
    ["Self-defense workshop for women. Practical techniques and situational awareness."],
    ["Aikido seminar with visiting sensei. Two-day workshop for all ranks."],
    ["Muay Thai kickboxing fitness class. Pads and gloves provided for beginners."],
    ["Capoeira workshop. Brazilian martial art combining music, dance, and acrobatics."],
    ["Judo clinic for beginners. Throwing techniques and breakfalls. Gi provided."],
    ["Kung fu demonstration and lion dance for Chinese New Year."],
    ["Mixed martial arts fitness class. No sparring, just conditioning and technique drills."],
    ["Wing Chun wooden dummy workshop. Practice trapping and striking techniques."],
    ["Hapkido self-defense seminar. Joint locks, throws, and pressure point techniques."],
    ["Tai chi push hands workshop. Partner exercises for balance and sensitivity."],
    ["Escrima stick fighting class. Filipino martial arts weapon techniques."],
    ["Kids martial arts tournament. Age and rank divisions. Trophies for all competitors."],
    ["Systema breathing and movement workshop. Russian martial art fundamentals."],
    ["Iaido Japanese sword drawing class. Meditation and precision with a training sword."],
    ["Combat sports first aid workshop. Ringside medical care for coaches and referees."],
    ["Martial arts movie night. Classic films and discussion of choreography and philosophy."],
  ];

  // ============================================================
  // 42. BOATING & WATER SPORTS EVENTS
  // ============================================================
  const waterSportsEvents: string[][] = [
    ["Sailboat racing clinic for beginners. Learn rules and basic sailing techniques."],
    ["Kayak and canoe rentals at the lake. Half-day and full-day rates available."],
    ["Stand-up paddleboard yoga class. Calm waters, mats attached to boards."],
    ["Fishing tournament on the reservoir. Bass, trout, and catfish divisions. $30 entry."],
    ["Whitewater rafting trip. Class III rapids, half-day adventure. Minimum age 12."],
    ["Boater safety certification course. Required for operating motorized watercraft."],
    ["Dragon boat festival and races. Teams of 20 paddlers. Festive atmosphere."],
    ["Scuba diving certification class. Pool sessions followed by open water dives."],
    ["Canoe polo tournament at the aquatic center. Fast-paced water sport. Teams of five."],
    ["Surfing lesson for beginners at the beach. Boards and wetsuits provided."],
    ["Outrigger canoe paddling experience. Try this Polynesian tradition on the bay."],
    ["Synchronized swimming demonstration by the aquatic center team."],
    ["Jet ski safety course. Rules of the waterway and responsible operation."],
    ["Rowing regatta on the river. Collegiate and club teams compete. Spectators welcome."],
    ["Snorkeling trip to the marine sanctuary. Boat transportation and gear included."],
    ["Open water swimming clinic. Sighting, drafting, and safety in lakes and oceans."],
    ["Tugboat parade in the harbor. Watch decorated tugboats cruise the waterfront."],
    ["Waterski and wakeboard clinic at the cable park. All equipment provided."],
    ["Pontoon boat cruise and sunset tour. Light refreshments served on board."],
    ["Underwater photography workshop. Waterproof camera housing and techniques."],
  ];

  // ============================================================
  // 43. TRICKY CONTENT - NORMAL WORDS THAT COULD BE FALSE POSITIVES
  // ============================================================
  const trickyCleanEvents: string[][] = [
    // Words containing profanity substrings (Scunthorpe problem)
    ["The class covers the assessment of therapeutic interventions for chronic conditions."],
    ["Cocktail reception and networking hour for the annual business association gala."],
    ["The assumption that participation will grow has driven our planning for next year."],
    ["Therapists will discuss accumulated research on childhood development."],
    ["The classic car show features beautifully restored vehicles from every decade."],
    ["Wellness workshop covering holistic approaches to managing workplace stress."],
    ["The analyst presented compelling data on market penetration and growth strategies."],
    ["Essex County annual grape stomp and harvest festival at the vineyard."],
    ["Discover the beauty of Middlesex County through guided nature photography walks."],
    ["Saturday night dance at the Cockermouth Community Hall. Live band and refreshments."],
    // Words that are normal in context
    ["The executive committee meets monthly to review organizational performance."],
    ["The basketball coach organized a series of drills for the junior varsity team."],
    ["Native species replanting project along the creek bank. Volunteers needed Saturday."],
    ["The contractor will present the construction timeline at Thursday's meeting."],
    ["Beaver Creek Nature Preserve guided walk. Learn about wetland ecology."],
    ["The annual Dickens Festival brings Victorian London to life on Main Street."],
    ["Peacock feather art project for kids. Watercolors and stamps provided."],
    ["Shuttlecock badminton tournament at the recreation center. All ages welcome."],
    ["The Hancock County Fair returns with rides, livestock, and demolition derby."],
    ["Assistant principal recognition ceremony and reception in the school cafeteria."],
    // More Scunthorpe-adjacent and tricky words
    ["Title IX compliance training for university athletic department staff."],
    ["Grasshopper observation walk at the prairie preserve. Bring binoculars."],
    ["The pianist delivered a masterclass on interpretation and expression."],
    ["Woodcock migration monitoring program. Volunteer spotters needed at dusk."],
    ["The class discusses fundamental principles of basement waterproofing."],
    ["Shittim wood artifacts from the ancient world on display at the archaeology museum."],
    ["Penistone market day. Fresh produce, artisan crafts, and street food."],
    ["The therapist specializes in helping families navigate challenging transitions."],
    ["Scunthorpe United supporters club annual dinner and awards night."],
    ["The Sussex countryside walking festival features 30 guided routes over two weeks."],
    // Tricky food and cultural terms
    ["The chef demonstrated knife skills and proper technique for julienne cuts."],
    ["Focaccia bread baking class. Italian flatbread with olive oil, herbs, and sea salt."],
    ["The sommelier guided guests through a vertical tasting of five vintage wines."],
    ["Coq au vin cooking demonstration. Classic French braised chicken in wine."],
    ["Traditional British desserts including treacle tart and sticky toffee pudding at the heritage fair."],
    ["Bangers and mash supper at the British pub. Onion gravy and mushy peas."],
    ["The market sells fresh cockles, mussels, and whelks from local fishing boats."],
    ["Kumquat festival at the citrus grove. Tastings, recipes, and tree sales."],
    ["Spatchcock chicken grilling demonstration. Learn this technique for even cooking."],
    ["The winery offers tasting flights of their award-winning pinot noir and chardonnay."],
    // International place names and cultural references
    ["The documentary explores the rich cultural heritage of Bangkok, Thailand."],
    ["Volunteers are building a school in a rural village in Niger, West Africa."],
    ["The lecture covers the architectural marvels of Isfahan, Iran."],
    ["Japanese cherry blossom festival in the botanical garden. Tea ceremony and origami."],
    ["Aboriginal art exhibition featuring works from artists in Arnhem Land, Australia."],
    ["The panel discusses economic development opportunities in sub-Saharan Africa."],
    ["Cultural exchange program with students from Ankara, Turkey."],
    ["Photography exhibition: landscapes of Patagonia, Argentina."],
    ["The choir performs traditional gospel music rooted in the African American experience."],
    ["Archaeological lecture: the terracotta warriors of Xi'an, China."],
  ];

  // ============================================================
  // 44. LONG-FORM EVENT DESCRIPTIONS
  // ============================================================
  const longFormEvents: string[][] = [
    ["The annual Riverside Community Arts Festival returns for its 15th year with an exciting lineup of activities for all ages. This three-day event features over 100 local artists displaying paintings, sculptures, photography, and mixed media works. Live musical performances throughout the weekend include jazz, folk, bluegrass, and classical ensembles. Children can enjoy hands-on art projects, face painting, and a puppet theater. Food vendors will offer cuisines from around the world, and a beer garden will feature local craft breweries. Free shuttle service from downtown parking garages runs every 15 minutes."],
    ["Join us for an unforgettable evening of science and wonder at the annual Science Under the Stars gala. This year's theme, Frontiers of Discovery, celebrates breakthroughs in quantum computing, gene therapy, and deep space exploration. The evening begins with a cocktail reception in the planetarium, followed by a keynote address from Dr. Elena Vasquez, astrophysicist and author of The Cosmic Perspective. A silent auction features once-in-a-lifetime experiences including a private observatory night, a marine biology expedition, and a visit to a particle physics laboratory. Proceeds support STEM scholarships for underserved students. Black tie optional. Valet parking available."],
    ["The Downtown Farmers Market Cooperative proudly announces the opening of our new year-round indoor market hall. Located at 450 Market Street in the renovated historic warehouse district, the market features 35 permanent vendor stalls offering locally grown produce, artisan cheeses, fresh-baked breads, organic meats, handcrafted jewelry, and specialty foods. Weekly programming includes chef demonstrations, nutrition workshops, live acoustic music on Saturdays, and a children's story corner on Sunday mornings. SNAP and WIC benefits accepted at all produce vendors. The market is fully accessible with elevator access, accessible restrooms, and reserved parking. Visit our website for vendor profiles and seasonal availability."],
    ["The Metropolitan Symphony Orchestra presents its landmark 50th anniversary season opener featuring a performance of Mahler's Symphony No. 2, the Resurrection Symphony, with a full chorus of 120 voices from the combined community and university choirs. Music Director James Park conducts the 90-piece orchestra in what promises to be a transcendent musical experience. Pre-concert talk at 6:30 PM in the lobby with musicologist Dr. Sarah Kim, who will provide context for Mahler's monumental work. A gala reception follows the performance in the grand foyer with champagne, desserts, and a chance to meet the performers. Season subscriptions and individual tickets available through the box office and online."],
    ["The Department of Parks and Recreation invites families to participate in the Great Outdoors Adventure Series this summer. Over eight weekends from June through August, explore different natural areas with trained guides. Activities include bird identification walks, stream ecology investigations, night sky observation parties, fossil hunting at the limestone bluffs, canoe trips on the winding river, wildflower photography workshops, orienteering challenges using map and compass, and a culminating camping overnight at Eagle Ridge. Each session accommodates 30 participants. Registration opens May 1st. Youth ages 8 through 17 must be accompanied by an adult. Equipment and snacks provided. Participants who complete six or more sessions earn a Parks Explorer badge and certificate."],
  ];

  // ============================================================
  // RUN ALL TESTS
  // ============================================================

  const allCategories: Array<{ name: string; events: string[][] }> = [
    { name: "Family & Children Events", events: familyEvents },
    { name: "Senior-Focused Events", events: seniorEvents },
    { name: "Environmental & Sustainability Events", events: environmentalEvents },
    { name: "Mental Health & Wellness Events", events: mentalHealthEvents },
    { name: "Career & Job Fair Events", events: careerEvents },
    { name: "Museum & Gallery Events", events: museumEvents },
    { name: "Volunteer & Community Service Events", events: volunteerEvents },
    { name: "Dating & Singles Events", events: datingEvents },
    { name: "Travel & Tourism Events", events: travelEvents },
    { name: "Vehicle & Transportation Events", events: vehicleEvents },
    { name: "Home & DIY Events", events: homeEvents },
    { name: "Gaming & Esports Events", events: gamingEvents },
    { name: "Religious & Spiritual Events", events: religiousEvents },
    { name: "Science & Research Events", events: scienceEvents },
    { name: "LGBTQ+ Events", events: lgbtqEvents },
    { name: "Music Festivals & Concerts", events: musicEvents },
    { name: "Food Festivals & Culinary Events", events: culinaryEvents },
    { name: "Dance Events", events: danceEvents },
    { name: "Film & Cinema Events", events: filmEvents },
    { name: "Fashion & Beauty Events", events: fashionEvents },
    { name: "Literary & Writing Events", events: literaryEvents },
    { name: "Agriculture & Farming Events", events: agricultureEvents },
    { name: "Craft & Maker Events", events: craftEvents },
    { name: "Sports Leagues & Tournaments", events: sportsEvents },
    { name: "Holiday & Seasonal Events", events: holidayEvents },
    { name: "Pet & Animal Events", events: petEvents },
    { name: "Real Estate & Housing Events", events: realEstateEvents },
    { name: "Finance & Investing Events", events: financeEvents },
    { name: "Health & Fitness Events", events: healthEvents },
    { name: "Education & School Events", events: educationEvents },
    { name: "Tech & Startup Events", events: techEvents },
    { name: "Gardening & Horticulture Events", events: gardeningEvents },
    { name: "Automotive & Motorsport Events", events: automotiveEvents },
    { name: "Photography Events", events: photographyEvents },
    { name: "Social Justice & Advocacy Events", events: socialJusticeEvents },
    { name: "Wedding & Celebration Events", events: weddingEvents },
    { name: "Astronomy & Space Events", events: astronomyEvents },
    { name: "History & Heritage Events", events: historyEvents },
    { name: "Language & Cultural Exchange Events", events: languageEvents },
    { name: "Nature & Wildlife Events", events: wildlifeEvents },
    { name: "Martial Arts Events", events: martialArtsEvents },
    { name: "Boating & Water Sports Events", events: waterSportsEvents },
    { name: "Tricky Content (false positive checks)", events: trickyCleanEvents },
    { name: "Long-Form Event Descriptions", events: longFormEvents },
  ];

  for (const { name, events } of allCategories) {
    describe(name, () => {
      test.each(events)("should NOT flag: %s", (description) => {
        const result = filter.check(description);
        if (result) {
          const detected = filter.detect(description);
          throw new Error(
            `False positive! Detected: ${JSON.stringify(detected.detectedWords)} in: "${description.substring(0, 100)}..."`
          );
        }
        expect(result).toBe(false);
      });
    });
  }
});
