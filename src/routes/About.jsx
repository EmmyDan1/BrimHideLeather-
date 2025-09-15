import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';


export default function About() {
  const team = [
    {
      name: 'Lenny Curry',
      role: 'Founder & Master Craftsman',
      image: '/images/brand/team-1.jpg',
      bio: 'With over 20 years of experience working with leather, James founded BrimHide to preserve traditional leatherworking techniques while creating modern, functional designs.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Lead Designer',
      image: '/images/brand/team-2.jpg',
      bio: 'Elena brings her background in fashion design and sustainable materials to create timeless pieces that balance aesthetics with functionality.'
    },
    {
      name: 'David Chen',
      role: 'Workshop Manager',
      image: '/images/brand/team-3.jpg',
      bio: 'David oversees production and quality control, ensuring every piece meets our exacting standards before it leaves our workshop.'
    }
  ];
  
  const values = [
    {
      title: 'Quality Materials',
      description: 'We source only the finest full-grain leathers from responsible tanneries that prioritize environmental stewardship.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Handcrafted Excellence',
      description: 'Every stitch is placed with intention and care. We take pride in our handcrafted approach, avoiding mass production methods.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    },
    {
      title: 'Timeless Design',
      description: 'We create pieces that transcend trends, focusing on classic designs that improve with age and develop character over time.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Sustainability',
      description: 'We minimize waste through careful pattern cutting and repurpose leather scraps for smaller goods and accessories.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-24 bg-deep-brown text-bone">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Founded on a passion for traditional craftsmanship and quality materials, BrimHide Leather Co. creates leather goods that stand the test of time.
          </p>
        </div>
      </div>
      
      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Our Journey</h2>
              <p className="mb-4">
                BrimHide Leather Co. began in 2015 in a small Bronx workshop with a simple mission: to create exceptional leather goods that get better with age. Founder Lenny Curry, frustrated by the disposable nature of modern accessories, set out to revive traditional leatherworking techniques while creating designs that meet contemporary needs.
              </p>
              <p className="mb-4">
                What started as a one-man operation crafting custom wallets and belts has grown into a team of skilled artisans producing a full range of leather goods. Despite our growth, we remain committed to handcrafting each piece with the same attention to detail that defined our earliest creations.
              </p>
              <p>
                Today, BrimHide operates workshops in Bronx, Austin, and Portland, where we continue to combine time-honored techniques with innovative designs to create leather goods that tell a story and develop character with every use.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/products/workshopimg3.png" 
                alt="Our workshop" 
                className="rounded-2xl shadow-soft w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-saddle-tan rounded-full flex items-center justify-center text-charcoal font-serif text-center p-4 shadow-lg">
                <span>Est. 2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-bone">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
                <div className="text-deep-brown mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-brown rounded-full flex items-center justify-center mx-auto mb-4 text-bone text-2xl font-bold">1</div>
              <h3 className="font-serif font-bold text-xl mb-2">Material Selection</h3>
              <p className="text-gray-600">
                We carefully select full-grain leathers from tanneries that prioritize environmental responsibility and ethical practices. Each hide is inspected for quality and character.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-brown rounded-full flex items-center justify-center mx-auto mb-4 text-bone text-2xl font-bold">2</div>
              <h3 className="font-serif font-bold text-xl mb-2">Handcrafted Production</h3>
              <p className="text-gray-600">
                Our artisans cut, stitch, and finish each piece by hand, using traditional techniques that ensure durability and a personal touch that machines cannot replicate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-brown rounded-full flex items-center justify-center mx-auto mb-4 text-bone text-2xl font-bold">3</div>
              <h3 className="font-serif font-bold text-xl mb-2">Quality Control</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous inspection before leaving our workshop. We stand behind our craftsmanship with a lifetime guarantee on stitching and hardware.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability */}
      <section className="py-16 bg-moss text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Commitment to Sustainability</h2>
            <p className="mb-6">
              We believe that creating products built to last is the first step toward sustainability. By crafting items that improve with age rather than wearing out, we reduce the cycle of consumption and waste.
            </p>
            <p className="mb-6">
              Our leather is sourced from tanneries that adhere to strict environmental standards, using vegetable-based tanning methods when possible. We minimize waste by carefully planning our cutting patterns and repurposing leather scraps for smaller goods.
            </p>
            <p>
              Our packaging is plastic-free, using recycled and recyclable materials to protect your purchases during shipping.
            </p>
          </div>
        </div>
      </section>
      
      {/* Meet the Team */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Meet the Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-saddle-tan mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-16 bg-bone">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Discover our collection of handcrafted leather goods or inquire about custom work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/shop" size="lg">
              Shop Collection
            </Button>
            <Button to="/custom" variant="outline" size="lg">
              Custom Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}