import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { formatDate } from '../lib/format';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const blogPosts = [
      {
        id: 1,
        slug: 'leather-care-guide',
        title: 'The Complete Guide to Leather Care',
        excerpt: 'Learn how to properly care for your leather goods to ensure they last a lifetime and develop a beautiful patina.',
        content: `
          <p>Leather is a natural material that, with proper care, can last for decades and develop a beautiful patina that tells the story of its use. In this comprehensive guide, we'll cover everything you need to know about caring for your leather goods.</p>
          
          <h2>Understanding Leather</h2>
          <p>Before diving into care techniques, it's important to understand what leather is and how it responds to different treatments. Full-grain leather, which is what we use for all BrimHide products, is the highest quality leather available. It includes the entire grain layer of the hide, making it extremely durable but also requiring proper maintenance to keep it looking its best.</p>
          
          <h2>Regular Cleaning</h2>
          <p>The first step in leather care is regular cleaning. For most leather items, simply wiping with a slightly damp cloth is sufficient to remove dust and surface dirt. For more thorough cleaning, use a mild soap specifically formulated for leather, applied with a soft cloth in gentle circular motions. Always test any cleaning product on an inconspicuous area first.</p>
          
          <h2>Conditioning</h2>
          <p>Leather needs to be conditioned periodically to replace natural oils that evaporate over time. We recommend conditioning your leather goods every 3-6 months, or more frequently if they're exposed to harsh conditions. Apply a small amount of leather conditioner with a soft cloth, working it into the leather in circular motions. Allow it to absorb for a few hours, then buff away any excess with a clean cloth.</p>
          
          <h2>Protection</h2>
          <p>To protect your leather from water and stains, apply a leather protector after conditioning. This creates a barrier that repels liquids and prevents them from being absorbed into the leather. Reapply protector every few months, especially before rainy seasons.</p>
          
          <h2>Dealing with Stains and Spills</h2>
          <p>If your leather item gets stained, address it promptly. Blot (don't rub) any liquid spills immediately with a clean, dry cloth. For oil-based stains, sprinkle cornstarch or talcum powder on the affected area and let it sit overnight to absorb the oil before brushing it away. For persistent stains, consult a professional leather cleaner.</p>
          
          <h2>Storage</h2>
          <p>Proper storage is crucial for maintaining leather goods. Store them in a cool, dry place away from direct sunlight, which can fade and dry out the leather. Use dust bags for leather bags and stuff them with paper to help maintain their shape. Hang leather jackets on padded hangers, and use shoe trees for leather footwear.</p>
          
          <h2>Special Considerations for Different Leather Items</h2>
          <p>Different leather items may require specific care approaches:</p>
          <ul>
            <li><strong>Bags and Wallets:</strong> Clean and condition regularly, paying special attention to handles and edges that receive the most wear.</li>
            <li><strong>Jackets:</strong> Have them professionally cleaned once a year, and condition them before storing for the season.</li>
            <li><strong>Belts:</strong> Focus conditioning on areas that bend and flex to prevent cracking.</li>
          </ul>
          
          <h2>When to Seek Professional Help</h2>
          <p>While regular maintenance can be done at home, some situations call for professional intervention. Deep cleaning, color restoration, and repair of significant damage should be handled by a leather care professional.</p>
          
          <p>By following these guidelines, your leather goods will not only last longer but will develop a rich patina that makes them uniquely yours. Remember, quality leather isn't just bought—it's cultivated over time with proper care and attention.</p>
        `,
        category: 'care',
        image: '/images/brand/blog-leather-care.jpg',
        date: '2025-08-15T00:00:00Z',
        author: 'Lenny Curry',
        authorTitle: 'Founder & Master Craftsman'
      },
      {
        id: 2,
        slug: 'history-of-leather-crafting',
        title: 'The Rich History of Leather Crafting',
        excerpt: 'Explore the fascinating history of leatherworking, from ancient civilizations to modern artisanal techniques.',
        content: `
          <p>Leather crafting is one of humanity's oldest trades, with a rich history spanning thousands of years. From ancient civilizations to modern artisans, the techniques and tools have evolved, but the fundamental appreciation for this versatile material remains unchanged.</p>
          
          <h2>Ancient Beginnings</h2>
          <p>The earliest evidence of leather use dates back to prehistoric times, with archaeological findings suggesting that early humans used animal hides for clothing, shelter, and tools as far back as 400,000 years ago. By 5000 BCE, ancient Egyptians had developed sophisticated tanning methods using vegetable oils and minerals. Leather artifacts found in Egyptian tombs, including sandals and furniture coverings, demonstrate their advanced leatherworking skills.</p>
          
          <h2>Classical Antiquity</h2>
          <p>In ancient Greece and Rome, leather became an essential material for military equipment. Roman legionaries wore leather armor and carried shields covered with leather. The Romans also developed new tanning techniques using oak bark and other plant materials, some of which are still used today. During this period, specialized guilds of leather workers began to form, establishing standards and passing down techniques through apprenticeships.</p>
          
          <h2>Medieval Craftsmanship</h2>
          <p>The Middle Ages saw the rise of leather guilds throughout Europe, with strict regulations governing quality and craftsmanship. Leather was used for everything from bookbinding to armor, and specialized techniques developed for different applications. Cordwainers (shoemakers), saddlers, and bookbinders each had their own guilds and closely guarded techniques. The Moroccan city of Fez became famous for its distinctive leather, dyed in colorful pits that can still be seen today.</p>
          
          <h2>Industrial Revolution</h2>
          <p>The Industrial Revolution brought significant changes to leather production. In 1858, the invention of chrome tanning revolutionized the industry, making the process faster and more efficient. Machines began to replace handwork for cutting and stitching, allowing for mass production of leather goods. Despite these advances, traditional handcrafting techniques were preserved by artisans who valued the quality and uniqueness of handmade leather items.</p>
          
          <h2>Modern Renaissance</h2>
          <p>Today, we're witnessing a renaissance in leather crafting. While industrial production continues, there's a growing appreciation for traditionally crafted leather goods. Artisanal workshops like BrimHide are reviving historical techniques while incorporating modern design sensibilities. The internet has allowed a new generation of craftspeople to learn traditional methods and share their knowledge, creating a global community of leather artisans.</p>
          
          <h2>Technological Innovations</h2>
          <p>Modern leather crafting benefits from technological innovations while honoring traditional techniques. Laser cutting allows for precise patterns, while new tanning methods reduce environmental impact. Vegetable tanning, one of the oldest methods, has seen a resurgence due to its eco-friendly nature and the beautiful patina it develops over time.</p>
          
          <h2>Cultural Significance</h2>
          <p>Throughout history, leather has held cultural significance across different societies. Native American tribes created intricate beadwork on leather garments for ceremonial purposes. In Japan, traditional hides were used for samurai armor. In the American West, leather became synonymous with cowboy culture, from saddles to boots. These cultural traditions continue to influence contemporary leather design.</p>
          
          <p>The history of leather crafting is a testament to human ingenuity and our enduring relationship with natural materials. At BrimHide, we're proud to be part of this continuing tradition, combining time-honored techniques with contemporary design to create pieces that honor the rich history of leatherworking while meeting the needs of modern life.</p>
        `,
        category: 'history',
        image: '/images/brand/blog-leather-history.jpg',
        date: '2025-07-22T00:00:00Z',
        author: 'Elena Rodriguez',
        authorTitle: 'Lead Designer'
      },
      {
        id: 3,
        slug: 'sustainable-leather-sourcing',
        title: 'Sustainable Leather: Ethical Sourcing Practices',
        excerpt: 'Discover how modern tanneries are adopting environmentally friendly practices and what to look for in sustainable leather products.',
        content: `
          <p>As consumers become increasingly conscious of the environmental and ethical implications of their purchases, the leather industry has been evolving to meet these concerns. At BrimHide, we believe that quality leather goods can be produced with respect for both the environment and animal welfare. This article explores the current state of sustainable leather sourcing and what to look for when purchasing leather products.</p>
          
          <h2>The Environmental Impact of Traditional Leather Production</h2>
          <p>Traditional leather production has historically had a significant environmental footprint. The tanning process, which converts raw animal hides into durable leather, often involves chemicals like chromium sulfate that can be harmful if not properly managed. Additionally, large amounts of water are used throughout the process, and the resulting wastewater can contain pollutants if not treated correctly.</p>
          
          <h2>Innovations in Sustainable Tanning</h2>
          <p>Fortunately, many tanneries are now adopting more sustainable practices. Vegetable tanning, one of the oldest methods of leather production, has seen a resurgence due to its use of natural tannins derived from tree bark and other plant materials instead of heavy metals. While this process takes longer—often weeks compared to days for chrome tanning—it produces a distinctive, environmentally friendlier leather that develops a beautiful patina over time.</p>
          
          <p>Other innovations include:</p>
          <ul>
            <li><strong>Water recycling systems</strong> that reduce consumption by up to 95%</li>
            <li><strong>Solar-powered tanneries</strong> that reduce carbon footprints</li>
            <li><strong>Chrome-free tanning methods</strong> that use alternative minerals</li>
            <li><strong>Closed-loop production systems</strong> that minimize waste</li>
          </ul>
          
          <h2>Ethical Sourcing and Animal Welfare</h2>
          <p>Ethical leather sourcing begins with animal welfare considerations. Responsible leather producers ensure that their materials come from animals raised primarily for meat, making leather a by-product rather than the primary reason for animal farming. This approach reduces waste by utilizing hides that might otherwise be discarded.</p>
          
          <p>Transparency in the supply chain is crucial. At BrimHide, we work with tanneries that can trace their hides back to farms with humane animal husbandry practices. We believe that respecting the source of our materials honors the animals and results in higher quality products.</p>
          
          <h2>Certification and Standards</h2>
          <p>Several organizations now provide certification for sustainably produced leather:</p>
          <ul>
            <li><strong>Leather Working Group (LWG)</strong> - Assesses environmental compliance and performance capabilities of leather manufacturers</li>
            <li><strong>Global Organic Textile Standard (GOTS)</strong> - Includes criteria for organic leather processing</li>
            <li><strong>OEKO-TEX® Leather Standard</strong> - Tests for harmful substances in leather products</li>
          </ul>
          
          <p>These certifications help consumers identify products that meet specific environmental and ethical standards.</p>
          
          <h2>Alternative Materials</h2>
          <p>While we specialize in traditional leather, we acknowledge the growing market for alternative materials. Plant-based leathers derived from mushrooms, pineapple leaves, apple peels, and other agricultural by-products are becoming increasingly sophisticated. These materials offer options for those who prefer not to use animal products while still providing durability and aesthetic appeal.</p>
          
          <h2>What to Look for When Purchasing Leather Goods</h2>
          <p>When shopping for sustainable leather products, consider these factors:</p>
          <ul>
            <li><strong>Transparency</strong> - Does the company disclose their sourcing practices?</li>
            <li><strong>Certifications</strong> - Look for recognized environmental certifications</li>
            <li><strong>Longevity</strong> - High-quality, durable leather goods that last for decades are inherently more sustainable than disposable alternatives</li>
            <li><strong>Repair policies</strong> - Companies that offer repair services extend the life of their products</li>
            <li><strong>Production methods</strong> - Vegetable-tanned or chrome-free leathers generally have lower environmental impacts</li>
          </ul>
          
          <h2>Our Commitment</h2>
          <p>At BrimHide, sustainability is an ongoing journey. We continuously evaluate our practices and seek improvements in our supply chain. By working with tanneries that prioritize environmental responsibility, minimizing waste in our production process, and creating products designed to last for generations, we aim to be part of the solution.</p>
          
          <p>The future of leather is moving toward greater sustainability, with innovations in tanning processes, transparent supply chains, and a renewed appreciation for traditional, less chemical-intensive methods. By supporting companies committed to these practices, consumers can enjoy beautiful, durable leather goods while minimizing environmental impact.</p>
        `,
        category: 'sustainability',
        image: '/images/brand/blog-sustainable-leather.jpg',
        date: '2025-06-30T00:00:00Z',
        author: 'David Chen',
        authorTitle: 'Workshop Manager'
      },
      {
        id: 4,
        slug: 'leather-types-guide',
        title: 'Understanding Different Types of Leather',
        excerpt: 'From full-grain to suede, learn about the different types of leather and their unique characteristics and uses.',
        content: `
          <p>Not all leather is created equal. The quality, durability, and appearance of leather products depend significantly on the type of leather used. This guide will help you understand the different types of leather, their characteristics, and ideal uses, empowering you to make informed decisions when purchasing leather goods.</p>
          
          <h2>Full-Grain Leather</h2>
          <p><strong>Characteristics:</strong> Full-grain leather is the highest quality leather available. It includes the entire grain layer of the hide, with all natural markings and imperfections intact. This type of leather has not been sanded, buffed, or snuffed to remove imperfections on the surface.</p>
          
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Extremely durable and long-lasting</li>
            <li>Develops a beautiful patina over time</li>
            <li>Retains the natural character and uniqueness of the hide</li>
            <li>Most breathable type of leather</li>
            <li>Strongest leather due to dense fiber structure</li>
          </ul>
          
          <p><strong>Best Uses:</strong> High-quality bags, briefcases, belts, shoes, and furniture that are meant to last for decades.</p>
          
          <h2>Top-Grain Leather</h2>
          <p><strong>Characteristics:</strong> Top-grain leather is the second highest quality. The top layer has been sanded and a finish coat added to create a more uniform appearance. This process removes some of the natural markings and imperfections.</p>
          
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>More uniform appearance than full-grain</li>
            <li>Still durable, though not as strong as full-grain</li>
            <li>More stain-resistant due to the finish</li>
            <li>More workable for a wider range of products</li>
          </ul>
          
          <p><strong>Best Uses:</strong> High-end leather goods where a more uniform appearance is desired, such as handbags, wallets, and some furniture.</p>
          
          <h2>Corrected-Grain Leather</h2>
          <p><strong>Characteristics:</strong> This leather has had its surface sanded to remove imperfections, then embossed with an artificial grain pattern. It's often finished with a layer of dye or pigment.</p>
          
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Very uniform appearance</li>
            <li>Good stain resistance</li>
            <li>Lower cost than full or top-grain</li>
          </ul>
          
          <p><strong>Best Uses:</strong> More affordable leather goods where durability is still important but the highest quality isn't necessary.</p>
          
          <h2>Split Leather</h2>
          <p><strong>Characteristics:</strong> Split leather is created from the layers of hide below the top grain. After the top grain is separated, the lower layers can be split into multiple layers.</p>
          
          <h3>Suede</h3>
          <p><strong>Characteristics:</strong> Suede is created from the inner splits of a hide, with the surface buffed to create a napped, soft texture.</p>
          
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Soft, velvety texture</li>
            <li>Available in many colors</li>
            <li>More affordable than top or full-grain</li>
          </ul>
          
          <p><strong>Best Uses:</strong> Shoes, jackets, accessories, and upholstery where a soft texture is desired.</p>
          
          <h3>Nubuck</h3>
          <p><strong>Characteristics:</strong> Nubuck is top-grain leather that has been sanded or buffed on the grain side to create a velvet-like surface.</p>
          
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Soft texture similar to suede but more durable</li>
            <li>Finer, shorter nap than suede</li>
            <li>More durable than suede</li>
          </ul>
          
          <p><strong>Best Uses:</strong> Shoes, boots, and some accessories.</p>
          
          <h2>Bonded Leather</h2>
          <p><strong>Characteristics:</strong> Bonded leather is made from leather scraps and fibers mixed with adhesives and pressed onto a fiber mesh or paper backing. It's then embossed to look like genuine leather.</p>
          
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Inexpensive</li>
            <li>Uniform appearance</li>
            <li>Can utilize leather scraps that might otherwise be wasted</li>
          </ul>
          
          <p><strong>Best Uses:</strong> Budget furniture, book bindings, and accessories where longevity is less important.</p>
          
          <h2>Specialty Leathers</h2>
          
          <h3>Vegetable-Tanned Leather</h3>
          <p><strong>Characteristics:</strong> This refers to the tanning process rather than the cut of the hide. Vegetable tanning uses tannins from tree bark and other plant materials instead of chemicals.</p>
          
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Environmentally friendlier process</li>
            <li>Develops a rich patina over time</li>
            <li>Ages beautifully</li>
            <li>Biodegradable</li>
          </ul>
          
          <p><strong>Best Uses:</strong> Belts, bags, shoes, and items that benefit from developing character over time.</p>
          
          <h3>Chrome-Tanned Leather</h3>
          <p><strong>Characteristics:</strong> Tanned using chromium salts, this process is faster and produces a more supple leather.</p>
          
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Soft and pliable</li>
            <li>Water-resistant</li>
            <li>Wide range of colors possible</li>
          </ul>
          
          <p><strong>Best Uses:</strong> Garments, gloves, and items where softness is important.</p>
          
          <h2>How to Identify Quality Leather</h2>
          <p>When shopping for leather goods, consider these factors:</p>
          <ul>
            <li><strong>Smell:</strong> Quality leather has a distinctive, natural smell</li>
            <li><strong>Feel:</strong> Good leather feels supple and becomes softer with use</li>
            <li><strong>Edges:</strong> Examine the edges—quality leather goods often have burnished or painted edges</li>
            <li><strong>Price:</strong> Quality leather typically commands a higher price due to the material cost and craftsmanship</li>
            <li><strong>Transparency:</strong> Reputable manufacturers will specify the type of leather used</li>
          </ul>
          
          <p>At BrimHide, we primarily use full-grain and vegetable-tanned leathers for their superior quality, durability, and ability to develop character over time. We believe in creating products that not only look beautiful when new but improve with age and use, telling the story of their journey with you.</p>
          
          <p>Understanding the different types of leather allows you to make informed decisions when investing in leather goods, ensuring you select the right type for your specific needs and preferences.</p>
        `,
        category: 'education',
        image: '/images/brand/blog-leather-types.jpg',
        date: '2025-06-10T00:00:00Z',
        author: 'Lenny Curry',
        authorTitle: 'Founder & Master Craftsman'
      },
      {
        id: 5,
        slug: 'custom-leather-projects',
        title: 'Behind the Scenes: Custom Leather Projects',
        excerpt: 'Take a look at some of our most interesting custom projects and the stories behind them.',
        content: `
          <p>At BrimHide Leather Co., custom projects allow us to push the boundaries of our craft and create truly unique pieces that tell individual stories. In this article, we'll take you behind the scenes of some of our most interesting custom leather projects and share the creative process that brings these bespoke items to life.</p>
          
          <h2>The Expedition Duffle: A Photographer's Companion</h2>
          <p>One of our most challenging and rewarding projects came from Alex, a wildlife photographer who needed a specialized bag for expeditions in harsh environments. The brief called for a water-resistant duffle that could protect camera equipment while withstanding extreme conditions from the Amazon rainforest to the Arctic tundra.</p>
          
          <p>Working closely with Alex, we designed a bag using oil-tanned leather for its natural water resistance, reinforced with waxed canvas in high-wear areas. The interior featured customized padded compartments for camera bodies and lenses, while the exterior included attachment points for tripods and additional gear.</p>
          
          <p>The most innovative aspect was a specialized opening system that allowed quick access to equipment without exposing the entire contents to the elements. After six prototypes and numerous refinements, the final bag accompanied Alex on a National Geographic assignment in Patagonia, where it performed flawlessly through rain, snow, and rugged terrain.</p>
          
          <h2>The Family Legacy Journal Cover</h2>
          <p>Maria approached us with a heartfelt request: a leather journal cover that would house her family recipes, collected over generations. She wanted something that would protect these precious handwritten pages and could be passed down as an heirloom.</p>
          
          <p>For this project, we selected our finest vegetable-tanned leather, known for its ability to develop character over decades of use. Working with Maria, we incorporated elements that reflected her family's heritage—a subtle embossed pattern inspired by traditional Portuguese tile work and her family name discreetly stamped on the spine.</p>
          
          <p>The interior featured hidden pockets for loose recipe cards and a special pen holder for continuing the tradition of handwritten additions. We designed a unique binding system that allowed pages to be added over time, ensuring this family treasure could continue growing for generations.</p>
          
          <p>Two years later, Maria sent us photos of the journal, now beautifully patinated and filled with recipes, showing how the leather had darkened and developed a rich luster that only comes with regular use and proper care.</p>
          
          <h2>The Musician's Guitar Strap</h2>
          <p>When indie musician Jake contacted us about creating a custom guitar strap for his upcoming world tour, we knew this would be a project where function and expression needed to balance perfectly. Jake wanted something comfortable enough for three-hour performances but also visually distinctive enough to become part of his stage presence.</p>
          
          <p>We started with a core of full-grain leather for durability, then added a padded shoulder section lined with soft sheepskin for comfort during long performances. The decorative elements were where this project really shone—Jake provided artwork inspired by his album covers, which we translated into a combination of laser engraving and hand-tooled details.</p>
          
          <p>The most technical challenge was incorporating a hidden quick-release system that allowed Jake to switch guitars in seconds without compromising the strap's appearance or integrity. After several prototypes and testing during rehearsals, we delivered a strap that has now traveled to over 30 countries and appeared on several television performances.</p>
          
          <h2>The Executive's Briefcase</h2>
          <p>Sarah, a newly appointed CEO, came to us wanting a briefcase that would make a statement in the boardroom while meeting her practical needs. As a woman in a male-dominated industry, she wanted something distinctively feminine yet powerfully professional.</p>
          
          <p>We designed a structured briefcase using a combination of deep burgundy and black leathers, with subtle contrast stitching. The interior organization was customized to her specific workflow—dedicated spaces for her tablet, documents, and the fountain pens she collects.</p>
          
          <p>The most unique feature was a hidden compartment accessible only when the bag was closed, providing secure storage for confidential documents. The hardware was custom-made in solid brass, and we added her initials in a discreet location known only to her.</p>
          
          <p>This project required seven design iterations and three in-person fittings to perfect. The result was a briefcase that Sarah later told us had become "a conversation starter and confidence booster" in important meetings.</p>
          
          <h2>The Adventurer's Map Case</h2>
          <p>One of our most unusual requests came from Jordan, a modern-day explorer who leads expeditions to remote locations. He needed a waterproof case for maps and navigation tools that could withstand extreme conditions while maintaining the romantic aesthetic of traditional exploration gear.</p>
          
          <p>We developed a cylindrical case using a combination of thick, oil-tanned leather and specialized waterproof membranes. The challenge was creating something completely waterproof while maintaining a traditional appearance. The roll-top closure was inspired by maritime equipment, with a system of straps and solid brass hardware that created a watertight seal.</p>
          
          <p>The interior featured a removable organization system for different types of maps and tools, while the exterior included attachment points compatible with various expedition gear. We even incorporated a special pocket for a satellite GPS device, bridging the gap between traditional navigation and modern technology.</p>
          
          <p>Jordan has since taken this case through the Amazon, across the Sahara, and up into the Himalayas, sending us photos of the case developing a unique patina that tells the story of his journeys.</p>
          
          <h2>The Creative Process Behind Custom Work</h2>
          <p>Each custom project follows a similar process, though the details vary widely:</p>
          
          <ol>
            <li><strong>Consultation:</strong> We begin with in-depth conversations to understand not just the functional requirements but the story and meaning behind the piece.</li>
            <li><strong>Design Development:</strong> Our designers create sketches and digital renderings, often going through multiple iterations based on client feedback.</li>
            <li><strong>Material Selection:</strong> We help clients select the perfect leather and hardware for their specific needs.</li>
            <li><strong>Prototyping:</strong> For complex projects, we create prototypes to test functionality and aesthetics.</li>
            <li><strong>Crafting:</strong> Our artisans handcraft each piece, often developing new techniques to meet unique requirements.</li>
            <li><strong>Finishing:</strong> The final piece is meticulously finished and quality checked before delivery.</li>
          </ol>
          
          <h2>The Value of Custom Leather Work</h2>
          <p>Custom leather projects represent the highest expression of our craft. They allow us to create pieces perfectly tailored to individual needs while pushing our skills and creativity to new levels. For our clients, these bespoke items often become their most treasured possessions—functional art that improves with age and carries personal significance.</p>
          
          <p>If you're interested in commissioning a custom leather project, we invite you to contact us for a consultation. Whether you need something for a specific practical purpose or want to create a meaningful heirloom, our team is ready to bring your vision to life in leather.</p>
        `,
        category: 'projects',
        image: '/images/brand/blog-custom-projects.jpg',
        date: '2025-05-18T00:00:00Z',
        author: 'Elena Rodriguez',
        authorTitle: 'Lead Designer'
      },
      {
        id: 6,
        slug: 'leather-tools-guide',
        title: 'Essential Tools for Leather Crafting',
        excerpt: 'A comprehensive guide to the tools every leather artisan needs, from beginner to professional.',
        content: `
          <p>Leather crafting is as much about the tools as it is about skill and materials. The right tools not only make the work easier but also significantly impact the quality of the finished product. Whether you're a curious beginner or looking to upgrade your leather working setup, this guide covers the essential tools for leather crafting at every level.</p>
          
          <h2>Beginner Essentials</h2>
          <p>If you're just starting your leather crafting journey, these fundamental tools will allow you to complete basic projects while developing your skills:</p>
          
          <h3>Cutting Tools</h3>
          <ul>
            <li><strong>Utility Knife:</strong> A basic utility knife with replaceable blades is perfect for straight cuts and general leather cutting.</li>
            <li><strong>Rotary Cutter:</strong> Excellent for cutting straight lines and curves on thinner leathers.</li>
            <li><strong>Self-Healing Cutting Mat:</strong> Protects your work surface and extends the life of your blades.</li>
          </ul>
          
          <h3>Punching and Stitching Tools</h3>
          <ul>
            <li><strong>Stitching Chisel/Pricking Iron:</strong> Creates evenly spaced holes for hand stitching. A 2-prong or 4-prong version is good for beginners.</li>
            <li><strong>Awl:</strong> Used for marking leather and creating single holes.</li>
            <li><strong>Stitching Needles:</strong> Blunt harness needles are ideal for hand stitching leather.</li>
            <li><strong>Waxed Thread:</strong> Provides strength and water resistance for your stitches.</li>
          </ul>
          
          <h3>Finishing Tools</h3>
          <ul>
            <li><strong>Edge Beveler:</strong> Rounds the edges of leather for a more finished look.</li>
            <li><strong>Burnisher:</strong> Smooths and polishes leather edges.</li>
            <li><strong>Mallet:</strong> A wooden or rubber mallet for tooling and setting hardware.</li>
          </ul>
          
          <h3>Measurement and Marking</h3>
          <ul>
            <li><strong>Metal Ruler:</strong> Essential for straight cuts and measurements.</li>
            <li><strong>Divider:</strong> Helps create consistent margins and spacing.</li>
          </ul>
          
          <h2>Intermediate Tools</h2>
          <p>As your skills develop and you tackle more complex projects, these tools will expand your capabilities:</p>
          
          <h3>Advanced Cutting Tools</h3>
          <ul>
            <li><strong>Head Knife:</strong> A traditional leather cutting tool that allows for precise cuts and curves.</li>
            <li><strong>Round Knife:</strong> Excellent for cutting curves and intricate shapes.</li>
            <li><strong>Swivel Knife:</strong> Used for decorative cutting and tooling designs.</li>
          </ul>
          
          <h3>Expanded Stitching Equipment</h3>
          <ul>
            <li><strong>Stitching Pony/Horse:</strong> Holds your work while you stitch, freeing both hands.</li>
            <li><strong>Thread Thickness Gauge:</strong> Ensures consistent thread tension.</li>
            <li><strong>Variety of Pricking Irons:</strong> Different sizes for various projects and stitch densities.</li>
          </ul>
          
          <h3>Edging and Finishing</h3>
          <ul>
            <li><strong>Edge Creaser:</strong> Creates decorative lines near edges.</li>
            <li><strong>Edge Paint Applicator:</strong> For applying clean edge coats.</li>
            <li><strong>Slicker:</strong> Glass or wooden tool for burnishing edges.</li>
          </ul>
          
          <h3>Stamping and Decoration</h3>
          <ul>
            <li><strong>Basic Stamp Set:</strong> Includes geometric patterns and decorative elements.</li>
            <li><strong>Background Stamps:</strong> Creates texture in larger areas.</li>
            <li><strong>Modeling Spoon:</strong> For shaping and adding dimension to tooled designs.</li>
          </ul>
          
          <h2>Professional Tools</h2>
          <p>For professional leatherworkers or serious enthusiasts, these specialized tools offer precision and efficiency:</p>
          
          <h3>Precision Cutting</h3>
          <ul>
            <li><strong>Clicking Knife:</strong> For precise pattern cutting, especially on thicker leathers.</li>
            <li><strong>Die Cutting Press:</strong> For consistent cutting of repeated shapes.</li>
            <li><strong>Laser Cutter:</strong> For intricate designs and precision cutting.</li>
          </ul>
          
          <h3>Advanced Stitching</h3>
          <ul>
            <li><strong>Sewing Machine:</strong> Specialized for leather with walking foot and proper needles.</li>
            <li><strong>Adjustable Creasing Machine:</strong> Creates consistent edge creases.</li>
            <li><strong>Skiving Machine:</strong> Thins leather edges consistently for folds and seams.</li>
          </ul>
          
          <h3>Specialized Finishing</h3>
          <ul>
            <li><strong>Edge Finishing Machine:</strong> Automates the edge finishing process.</li>
            <li><strong>Hot Stamping Machine:</strong> For applying foil or brand marks.</li>
            <li><strong>Airbrush System:</strong> For applying dyes and finishes evenly.</li>
          </ul>
          
          <h2>Tool Quality and Maintenance</h2>
          <p>The quality of your tools significantly impacts your work. Here are some considerations:</p>
          
          <h3>Choosing Quality Tools</h3>
          <ul>
            <li><strong>Materials:</strong> Look for tools made from high-carbon steel, hardwood handles, and durable construction.</li>
            <li><strong>Craftsmanship:</strong> Well-made tools will have clean finishes and proper balance.</li>
            <li><strong>Investment Strategy:</strong> Invest in high-quality versions of tools you use most frequently.</li>
          </ul>
          
          <h3>Tool Maintenance</h3>
          <ul>
            <li><strong>Cleaning:</strong> Clean tools after each use to remove leather dust and residues.</li>
            <li><strong>Sharpening:</strong> Keep cutting tools sharp for clean cuts and safety.</li>
            <li><strong>Rust Prevention:</strong> Apply light oil to metal parts to prevent rust.</li>
            <li><strong>Storage:</strong> Store tools in a dry environment, preferably in rolls or cases that protect edges and points.</li>
          </ul>
          
          <h2>Building Your Tool Collection</h2>
          <p>Building a leather crafting tool collection is a journey that should align with your skill development and project needs:</p>
          
          <h3>Start with Basics</h3>
          <p>Begin with essential tools that allow you to complete simple projects. This approach lets you develop skills before investing heavily.</p>
          
          <h3>Expand Strategically</h3>
          <p>Add tools as you encounter limitations with your current set. Let your projects guide your purchases.</p>
          
          <h3>Consider Vintage Tools</h3>
          <p>Quality vintage leather tools often outperform modern mass-produced alternatives. Look for estate sales, online auctions, or specialized tool dealers.</p>
          
          <h3>Make Your Own</h3>
          <p>Many leatherworkers create custom tools for specific applications. As you gain experience, you might find yourself adapting or making tools to suit your particular style or needs.</p>
          
          <h2>Our Workshop Tools</h2>
          <p>At BrimHide, our artisans use a combination of traditional hand tools—many decades old and passed down through generations—alongside modern precision equipment. We believe this blend of old and new allows us to honor traditional craftsmanship while meeting modern production standards.</p>
          
          <p>Our most treasured tools include a collection of Japanese leather knives from the 1950s, hand-forged stamping tools from a master toolmaker in Texas, and a set of English pricking irons that have been in continuous use for over 70 years.</p>
          
          <h2>Final Thoughts</h2>
          <p>The tools of leather crafting connect us to a tradition that spans centuries. While technology has introduced new options, many of the fundamental tools remain largely unchanged from those used by craftspeople hundreds of years ago.</p>
          
          <p>Remember that while quality tools are important, they're only as good as the hands that wield them. Practice, patience, and attention to detail are the true essentials of fine leatherwork. Start with basic tools, master their use, and expand your collection as your skills and projects demand.</p>
          
          <p>Whether you're crafting as a hobby or profession, the right tools will make the process more enjoyable and your results more satisfying. Happy crafting!</p>
        `,
        category: 'education',
        image: '/images/brand/blog-leather-tools.jpg',
        date: '2025-04-25T00:00:00Z',
        author: 'David Chen',
        authorTitle: 'Workshop Manager'
      }
    ];
    
    // Find the current post
    const currentPost = blogPosts.find(p => p.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts (same category, excluding current)
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 2);
      
      setRelatedPosts(related);
    } else {
      // Post not found, redirect to blog index
      navigate('/blog', { replace: true });
    }
    
    setLoading(false);
  }, [slug, navigate]);
  
  if (loading) {
    return (
      <div className="container py-12 text-center">
        <p>Loading post...</p>
      </div>
    );
  }
  
  if (!post) return null;
  
  return (
    <div className="container py-12">
      <div className="mb-6">
        <Link to="/blog" className="text-gray-600 hover:text-deep-brown inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>
      </div>
      
      <article className="max-w-4xl mx-auto">
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <span>{formatDate(post.date)}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          
          <div className="aspect-video overflow-hidden rounded-2xl mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>
        
        {/* Post Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Author Bio */}
        <div className="mt-12 p-6 bg-bone rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src="/images/brand/author-placeholder.jpg" 
              alt={post.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold mb-1">{post.author}</h3>
            <p className="text-gray-600 mb-3">{post.authorTitle}</p>
            <p>
              A passionate advocate for traditional craftsmanship and quality materials. 
              With years of experience in leather working, they bring a wealth of knowledge 
              and expertise to the BrimHide team.
            </p>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.id} className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <Link to={`/blog/${relatedPost.slug}`} className="block aspect-video overflow-hidden">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{formatDate(relatedPost.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{relatedPost.author}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    <Link to={`/blog/${relatedPost.slug}`} className="hover:text-saddle-tan">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                  <Link 
                    to={`/blog/${relatedPost.slug}`}
                    className="inline-flex items-center text-deep-brown hover:text-saddle-tan"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
      
      {/* Newsletter */}
      <div className="mt-16 bg-bone rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Enjoyed this article?</h2>
          <p className="mb-6">
            Subscribe to our newsletter for more insights on leather craftsmanship, care tips, and product updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-brown"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-deep-brown text-bone font-medium rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-brown transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}