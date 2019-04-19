const PLAN = {
      'run': { 
        'level': {
          'beg': {
            'fiveK': {
              'title': 'Beginners 5k',
              'sku': 'b5K1239',
              'weeks': '12',
              'miles': '9-13',
              'why1': 'Could be your first race. Ever. AWESOME! Perfect distance to start.',
              'why2': 'Same price as: A solid bottle of wine for your hot date',
              'price': '39'
            },
            'tenK': {
              'title': 'Beginners 10K',
              'sku': 'b10k1249',
              'weeks': '12',
              'miles': '16-24',
              'why1': `5k's are a thing of the past. You're looking for something new. Only doubling your race mileage. No big deal.`,
              'why2': `Same price as: A mini drone. I have one, it's pretty cool. If you get that instead I would understand.`,
              'price': '49'
            },
            'halfMarathon': {
              'title': 'Beginners Half Marathon',
              'sku': 'bHM1459',
              'weeks': '14',
              'miles': '17-29',
              'why1': `You think 10k's and 5k's are in the past. You're prepared for a new beginning and ready to run till your legs are asking you...why?`,
              'why2': `Same price as: One ticket to a sports game.`,
              'price': '59'
            },
            'marathon': {
              'title': 'Beginners Marathon',
              'sku': 'bM1679',
              'weeks': '16',
              'miles': '16-44',
              'why1': `Maybe this is your very first marathon. If so, AWESOME! You are about to embark on one of the most exciting accomplishments of your life. You can do it!!!`,
              'why2': `Same price as: The running shirt and pants you bought to run the thing.`,
              'price': '79'
            }
          },
          'int': {
            'fiveK': {
                'title': 'Intermediate 5k',
                'sku': 'i5K1239',
                'weeks': '12',
                'miles': '14-20',
                'why1': `You might have done one before. Maybe not. You just know you don't want to get last.`,
                'why2': 'Same price as: A phone case.',
                'price': '39'
              },
            'tenK': {
                'title': 'Intermediate 10K',
                'sku': 'i10k1249',
                'weeks': '12',
                'miles': '20-26',
                'why1': `You've probably done a marathon before. If not, major kudos. Way to create some high standards for yourself!`,
                'why2': `Same price as: One month for a gym membership. This is 4 months. Speaks for itself`,
                'price': '49'
            },
            'halfMarathon': {
                'title': 'Intermediate Half Marathon',
                'sku': 'iHM1459',
                'weeks': '14',
                'miles': '27-41',
                'why1': `You've probably done one before. You are on your way to become top in your age group!`,
                'why2': `Same price as: A few cases of your favorite beer`,
                'price': '59'
              },
            'marathon': {
                'title': 'Intermediate Marathon',
                'sku': 'iM1679',
                'weeks': '16',
                'miles': '26-51',
                'why1': `You've probably done a marathon before. If not, major kudos. Way to create some high standards for yourself!`,
                'why2': `Same price as: One month for a gym membership. Gross. This is 4 months. Speaks for itself. `,
                'price': '79'
            }
          },
          'adv': {
            'fiveK': {
                'title': 'Advanced 5k',
                'sku': 'a5K1639',
                'weeks': '16',
                'miles': '16-33',
                'why1': `You're prepared to crush the competition. Would suggest starting in the front of the pack :)`,
                'why2': `Same price as: One round of golf. If that's your cup of tea.`,
                'price': '39'
              },
            'tenK':{
                'title': 'Advanced 10K',
                'sku': 'a10k1249',
                'weeks': '12',
                'miles': '14-39',
                'why1': `You've done this before. You know what you're doing. You want to take that next step and crush the competition.`,
                'why2': `Same price as: 9 watermelons. In case you were wondering.`,
                'price': '49'
            },
            'halfMarathon': {
                'title': 'Advanced Half Marathon',
                'sku': 'aHM1459',
                'weeks': '14',
                'miles': '30-50',
                'why1': `You have definitely done a Half Marathon before. You're also ready to be one of the top runners of your age group.`,
                'why2': `Same price as: 1 Xbox or Playstation game`,
                'price': '59'
              },
            'marathon': {
               'title': 'Advanced Marathon',
               'sku': 'aM1679',
               'weeks': '16',
               'miles': '34-65',
               'why1': `You know what to expect and you know you want to qualify for Boston. You do not mess around.`,
               'why2': `Same price as: A date that's going pretty well. You decided to get a drink for yourself and your potential partner because you think it might lead to a second date...or lucky night.`,
               'price': '79'
            }
          }
        }
      },
      'tri':{
        'level': {
            'beg': {
                'sprint': {
                    'title': 'Beginners Sprint',
                    'sku': 'bS1249',
                    'weeks': '12',
                    'why1': 'Perhaps your very first triathlon? Warming up to this new world of pain? This plan is for you.',
                    'why2': 'Same price as: One nice bottle of wine.',
                    'price': '49'
                },
                'olympic': {
                    'title': `Beginner Olympic / 5150`,
                    'sku': 'bO1659',
                    'weeks': '16',
                    'why1': `Could be your first time. Could just be aiming for the finish. Either way, you'll do the same triathlon distance as an olympian!!`,
                    'why2': 'Same price as: A manny, peddy',
                    'price': '59'
                },
                'halfIron': {
                    'title': 'Beginners Half Ironman / 70.3',
                    'sku': 'bHI24129',
                    'weeks': '24',
                    'why1': 'MATT! THIS IS MISSING!',
                    'why2': 'THIS IS ALSO MISSING!',
                    'price': '129'
                },
                'iron': {
                    'title': 'Beginners Ironman / 140.2',
                    'sku': 'bI24149',
                    'weeks': '24',
                    'why1': 'missing',
                    'why2': 'missing',
                    'price': '149'
                }
            },
            'int': {
                'sprint': {
                    'title': 'Intermediate Sprint',
                    'sku': 'iS1649',
                    'weeks': '16',
                    'why1': `You've maybe done this race before...maybe not...maybe you just want to go home satisfied in the top 10% of your age group. No big thing.`,
                    'why2': 'Same price as: One lunch for each day of the work week. Nothin.',
                    'price': '49'
                },
                'olympic': {
                    'title': 'Intermediate Olympic / 5150',
                    'sku': 'iO1659',
                    'weeks': '16',
                    'why1': `You're off your training wheels and prepared to beat your PR. Go get it!!`,
                    'why2': 'Same price as: Your first 5k',
                    'price': '59'
                },
                'halfIron': {
                    'title': 'Intermediate Half Ironman / 70.3',
                    'sku': 'iHI24129',
                    'weeks': '24',
                    'why1': 'Missing info',
                    'why2': 'Also missing....',
                    'price': '129'
                },
                'iron': {
                    'title': 'Intermediate Ironman / 140.2',
                    'sku': 'iI24149',
                    'weeks': '24',
                    'why1': 'missing',
                    'why2': 'missing',
                    'price': '149'
                }
            },
            'adv': {
                'sprint': {
                    'title': 'Advanced Sprint',
                    'sku': 'aS1249',
                    'weeks': '12',
                    'why1': 'You are looking to demolish the competition!',
                    'why2': 'Same price as: One round of shots for you and your friends.',
                    'price': '49'
                },
                'olympic': {
                    'title': 'Advanced Olympic / 5150',
                    'sku': 'aO1659',
                    'weeks': '16',
                    'why1': 'MATT! This is missing!!!!',
                    'why2': 'MATT!!!!! THIS IS ALSO MISSING!',
                    'price': '59'
                },
                'halfIron': {
                    'title': 'Advanced Half Ironman / 70.3',
                    'sku': 'aHI24129',
                    'weeks': '24',
                    'why1': 'Missing',
                    'why2': 'Missing',
                    'price': '129'
                },
                'iron': {
                    'title': 'Advanced Ironman / 140.2',
                    'sku': 'aI24149',
                    'weeks': '24',
                    'why1': 'missing',
                    'why2': 'missing',
                    'price': '149'
                }
            }
        }
      }
}

  export { PLAN };