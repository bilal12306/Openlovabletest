
export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-cream-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading mb-4">FOOD BREW</h3>
            <p className="text-cream-medium">
              Where gourmet food meets signature brew
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Menu', 'About', 'Reservations', 'Order', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-accent-saffron transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Hours</h4>
            <ul className="space-y-2 text-cream-medium">
              <li>Mon-Fri: 8am - 10pm</li>
              <li>Sat-Sun: 9am - 11pm</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="hover:text-accent-saffron transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-coffee-dark/30 mt-8 pt-8 text-center text-cream-medium">
          <p>© {new Date().getFullYear()} FOOD BREW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
  
