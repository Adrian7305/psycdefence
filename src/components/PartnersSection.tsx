
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Linkedin } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  website?: string;
}

interface KeyPerson {
  name: string;
  role: string;
  company: string;
  image: string;
  email?: string;
  linkedin?: string;
}

const PartnersSection = () => {
  const partners: Partner[] = [
    {
      name: "AICDSU",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAACrCAMAAAD8Q8FaAAABCFBMVEX////1hjQJeKapyyzlqxRyc3Zub3KixwAAbJ9rbG/0fBf1gCNoaWw3NDX7zbRlZmn84dJDjbP97+f6/PT70brp8dPf4ODDw8Tx9uKDhIbkqAAAc6PjpAD+9e9xpMHs7O2QkJOGsMmoqaokICLx9vm/v8CdnZ/R0dIWEROysrT1gir5upaXmJro6On0eg6myRwAAABcXWH2mVvw0JP35cb5tIz2j0f03rWev9Px1Z9/gIOtyNnF2OTqu1f1ijv3oWz3qXn83c368eD6xafU4uv5t5HsxHHD2nzW5ajmsCxUlbjuyoPsw27otUDqvl746tDe6rqwz0a41F/C2njj7cS10lTM35EAX5j/ck65AAAMTUlEQVR4nO2ce1vbOBaHBW1MnHhrbnWaQEjIOkkdkjDAFFpKW+htShl6m9nu9/8mq3Mk27Il57ZO3Hme8/sjwbocS28kHV1sGCORSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgk0mq0w1V0GZaqA7MOn7+8ej+TgZ2Lj7f7Qo3bV3dv2ZOkJL5U6BJrtBSV97JULpe3Dq+mZP/6ar/ReBipsf8720jqMabbSYUuo+092k0qI2o7Cm3eHF2fnr9+fX56fXQz2XZ5fZI4rM8TSDU5pIcJcUwPEoowJUOXgGl7XE1orMQpUeNHMmz3dFwdDAZrXPyrOn6zOcH4ZExAqrz3PCPvRRpSoZhuqmsJVZpxXCUOrgpM268rg2T6wfg62/hUTEjqpSnr3X4aUqGY3qUwVZV+pGG6Ga/pqp5nGp8F0/p6ecvXcn7UmlKxmK5TraP6Lo5LY9o0UeJx11nGZ8PEG1R6iDoztKVCMZ2n6jx4lo3ptZHS2tp4O8P4jJh4g0p2vN+NlIrEVElVeXCaiWk3ndaEdjFMSU47ph5XKKZtrerVTExvlP5ZfX2uDGqv/29M62q/+/OXw5R2dAlXl8KkJIURbDe+HmdYnwPTejmal781d7kiMaUdHScQT4SSmJrjZCKlIaqziEUxra+HubIaU4GY0o4umiHpmNT+uQxMewci005WYyoQU9rRJcbj1WIKu91FVmMqEJPW51RXt2JM61uYyTizbIAKw6Q7OtXVrRqT8Ha3pnZ0//Hu7uOXrwVh0h0dd1tRnZeFqVwu7+0Zwvc+Qya9MTUevg0tFoNJd3Sqq8sb01YY7r9//rlsAFX2jSN4I653MZieaY5OdXVLw4SoDvW2BrsqTQ1T40WcqxhMpxGm2OXFrm6pmDioda1BbZkw7b+N8xSDKepzg+toXRu7uiVjYszY63RMivVCMDWjmg4+nMbNaUZM8ebmeEFMfrrfga/TNy2/FowpdnSDd/F8PKr0ZEzNeKv8UYb9aZjY81S3g8HpVZpT42OcoRBMjyJM1d0PA5UBajKmGTQVU7o5wYLlTG9O8eBUCKbY0VVv4rlB5OqWj4l93tOS6HtyjfsofSGYYkdX2Y73RSJXtwJM6V4H2wT6xGk/mhIUgimeNVWayjgVuroVYLpK9zpm3EiJul0RmJQdpIpKIXR1K8D0PpWkzMO+GnZSbmX6IjBtxkuVqsosdHUFYTItfhtnIn0RmGJHt3auQgkhFIXJdLAi55hFYIod3eCNerwUuroCMO1h6L1hl0BMnorAFDs6cG7K1QcRvwJMLw2eznxoIJpTEZhiRzc4UrfFQ1c3F6ZuLaHubJgO9XkT6M7QnM4KwtSsqBTYkUJtfkyt3/6d0G+zYdpK9bnPMty0hVkQpk0F001ii066unkw+U//ldDTmTBpi5VDGWHodjh3KgCT4ugq24kN38rmijAdpJe+0Rm53u1wd64ATPFil08IuBJQpmNqPjsK9ay5GKa0n1OOfvUlS+PPYjCpzwQkJV3dtP2mQajxgpjW0yrHcVpzwgVwAZiyIIlp1HRMid3L1m9PE5phCNc3eaMRnBlPNTVMx98w6ZNlYlIcnc5pbkxGTcT03HBkoDy+o287NXjo9ySmn5j023ESU56UVEenSbi65WHyrw6zDqBC6RMCwPQj1Zww6XdTYF7aNZzRRfXeXBKmlwcHB5+31ssmSIk+p231il2CP5IN58H3x+zJX+mwXDEdZY7goatbAqZDeKLeQEg0piuGw8rO2xcPDdPwVzzqZwrJg42NjVTQ8V+5YlId3QDOR9TrD8vClMlIxN89fHXf2NcfCQdMd9zi32lMuo4/5YpJ7WMYoG7MvSkAE5w+nTUmPbajOTWT5CwhLym1lms49Xnm1WPCkUn3bzEmNDmVUs4juNp25I6AQmm8ekzo5rIx4SRcH8N1Sj9zxaQ4usG1CIp3nISrWykm8chzNiZ59vv3tF63ke97YoqjC98sUJ5Pqe6uGJN88jITE/o50LQ+9yNXSqqjq8q3w5StFHR1K8S0J6eemZiiI6hPk3tdzo1JfbNC7psk+uEbDVNziZhCSpmY4gNNNhHT8R/5UlIZhLVMPImpYVId4eB0c1NpjrM/kWLGFFFiL8yYGl9ioxNHp3xn4Ekk4UOp6gPyUPMUJmWEh/moepVxkxkxlQ+iHGZMykMEbKKzO877XFxd0UUvxClh0BFTmB5lLQLDk5jFMCXeOzRiioZvqf9kcTrO/W1o9YDgOgw8TQ7rKUzKSUxSlaybzIIp+dKhCdP+XdruDyOn4wdLfQsDTp+MgWlMGa8djjMP7aZi2itvJd841DHt337VDf80jE8beY/eIHXnO3pbXG1ib4wvseoNqjrIPtqcjGmvXD5I/zuCFKbG/u2F0fKTH8mNgeONH/ku5aSMxySJLSjjK9GnKVCDcdYrh6D/lhMSGynlSf+H4MU+vnYh3r7Yv717qyeRevLzwcbGMWpj4/vP5fyPhu1xJVLszjeToepV+ATd9rO1SrWKBwXVamXtKGMqIOSnxNj7q6uXXFfv9beghb5enN19ub+/vf9ydjHRNtfO42+fuL49Xt7/BtlWlBWqXilFbt48OnrG9W436x1fEolEIpFIJBKJZFDbKpXcVh6WWm6pZA2npwE53jyWeQarbo6B0s9jalHlgKkVcHmsdWLbTntK0rwwwS1rjFm2bZ/MWdyFlAMmz7Vtt8b8oNvt9icnXRhTKYUJfhLecvkdu8G85V1EEhM+w826wx6vZwse7fb8zrAj8NV6w163JcK7jPUhFq54cAApPKdUsvlPCyYQU60jY3y0xILQUoTJ8hS7bASGR/hEeR/Nd1m/N8QnyvE7woSGkbAjOrgoNqTrDIciRq1J7pgc/uvUh45l8WYBrcPp2LZluz5AsC2L/xkw/wRbeNuBttN1w+D+CbaPti873ch2MKbDRD/slXjKk1GMSTQMLzLA+tAc+5CfZ+rBRce1LGgtAXxfSkyeNMzvgbe0TqJOV3cxBixDTS5lTXLHhL+x+KmxdZQcuLD5LwrfLiTqM5t/jtgl9Jk+jNcY5XmYzW77cgi3ITdk6AoqNnxYnRQmX7Hb5zd0+nAnnqxnQQQY4cXCrK7AJHKA8UBgKp1gsfkQPuTJbWjTdSZrYmFNloOJ1fGugMnq+PjJurwEDhtaMtoRsHweECbxAxu+POnpoM5uq2NBNhkEydopTKpdDZMzwmgPyfcgP88EQZfwI/HPPmCs9yUmSGbXIMz1MMgS1VoOpjoW0Q3HGlFECLJZgBH8bxHuMtHULKQg00smAM3FOrktDAowWT3GdAmDB9i1WAftaphc5CAxBbJwPC2HLcrDZMstRb+r441EMUrIsbdiTO0Yk8/rbgcQfsl433cEpnYKk7CBrWEEQTZiKimYoH+gXYnJz8TUUjH1HMsWRXRSmERixNRN1KQYTLw6VqflQAE7XB4UjzeTTExeBibswHNjqvFbdltyNEpgqv1SmKAPWW1eGhunKv1LR+SaG5Pr2gtg4vKG7j8AE/Y3HguTpIA7I3sxTPVWq7UIpj53oPY/AROMK7wCfA7dgZq1FsQEf82PCeZndk0M+r82JpwGWDI9r5I1GVPGEL4gpg5OHnq/PCYfS1rH+1vhhGBRTIqnwwmBPd3TRROCNKZfwNOp8yb82XBaMgFTJ8Lk+hMwDTVMfua8yYoKVzdjiudN/YIwiWbBU8EEEZcxYfms4ciJMFm9kcRUwzLjkoNNwBQodqGaVoDTiyQmLENb3gY7XUssFHBifulJTKLR1WytJqvDhCspXKJ5ciGG8wHsM+FiC1ZYlhuu6ZwwQ38SJtVuK1q6JTHhwii6TRcM42KN1/8Svk/CWVQb1nSQo8eWhKnuOs4Jd/WO416yIVww74R/dhn/dIfQgvia23Zc3JfgYTyuJveYejwzz8W6PJvjtiBDm7GRJTJ0YYeAB3WkccR0Ev3ZV+x2wFrgYuIelqEGZeCLYtg1CCyRqeTw6XsHo5lnY7ktB694LbgtXiD+p6PUJD+NPC5+W/wSFz58tjAItz/63SCQmzeYzIOnSPwaDxO5pJU4gxdliC15igF5a9VuEIxkflGGlrzPCPZFw0z9oCYiErcUV7UgqLXiO4yU+5BIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCLNov8BQSfrw2g0KXcAAAAASUVORK5CYII=",
      description: "AIC-DSU Innovation Foundation is an Innovation Center that strives to engage a wide range of stakeholders in problem-solving activities & accelerate their growth",
      website: "https://aicdsu.foundation/"
    },
    {
      name: "Dayananda Sagar University",
      logo: "https://facultytub.com/wp-content/uploads/2024/11/logo-2.png",
      description: "Premier educational institution driving technological advancement and research excellence",
      website: "https://www.dsu.edu.in/"
    }
  ];

  const keyPersons: KeyPerson[] = [
    {
      name: "Dr. Prashantha Kumar H G",
      role: "Associate Professor Department of Aerospace Engineering",
      company: "Dayananda Sagar University",
      image: "/lovable-uploads/6b61d1b2-cf3d-4785-9804-3eb4e1b03c76.png",
      linkedin: "https://www.linkedin.com/in/dr-prashantha-kumar-h-g-6547b1102/"
    },
    {
      name: "Dr. Sridhar S K",
      role: "Associate Professor Department of Computer Science and Engineering",
      company: "Dayananda Sagar University",
      image: "/lovable-uploads/b73bee17-5a8a-4358-b81d-259b48aca8b8.png",
      linkedin: "https://www.linkedin.com/in/dr-sridhar-s-k-599283229/"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0F131A] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjRkY2RjAwIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIGN4PSIzMCIgY3k9IjMwIiByPSIyOSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-gradient">Our Partners</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-psyc-orange to-transparent"></div>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Collaborating with leading institutions to revolutionize wildlife conservation technology
          </p>
        </motion.div>

        {/* Partner Organizations */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-psyc-orange/20 cyber-border hover:border-psyc-orange/40 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-24 mb-6 bg-white/10 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-psyc-orange mb-4">{partner.name}</h3>
                <p className="text-white/80 mb-6">{partner.description}</p>
                {partner.website && (
                  <a 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-psyc-orange/20 hover:bg-psyc-orange/30 border border-psyc-orange/40 rounded-lg transition-all duration-300 text-psyc-orange hover:text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Key Partner Persons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Key Partner Persons</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {keyPersons.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-psyc-orange/20 cyber-border hover:border-psyc-orange/40 transition-all duration-300 group text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-psyc-orange/40">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{person.name}</h4>
                <p className="text-psyc-orange font-medium mb-1">{person.role}</p>
                <p className="text-white/70 text-sm mb-4">{person.company}</p>
                
                <div className="flex justify-center space-x-3">
                  {person.email && (
                    <a 
                      href={`mailto:${person.email}`}
                      className="p-2 bg-psyc-orange/20 hover:bg-psyc-orange/30 rounded-lg transition-all duration-300 text-psyc-orange hover:text-white"
                    >
                      <Mail size={16} />
                    </a>
                  )}
                  {person.linkedin && (
                    <a 
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-psyc-orange/20 hover:bg-psyc-orange/30 rounded-lg transition-all duration-300 text-psyc-orange hover:text-white"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
