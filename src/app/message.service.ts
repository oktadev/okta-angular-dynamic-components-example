import { Injectable } from '@angular/core';
import { MessageItem, MessageType } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: MessageItem[] = [  
    {  
      type: 'Clawesome',
      data: {  
        url: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
        content: 'Cat ipsum dolor sit amet, meow for can opener to feed me',
      } 
    },  
    {  
      type: 'Clawesome',
      data: {  
        url: 'https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
        content: 'Cat ipsum dolor sit amet, find dog bed and sleep all day',
      }
    },  
    {  
      type: 'Clawesome',
      data: {  
        url: 'https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
        content: 'Cat ipsum dolor sit amet, too cute for human to get mad'
      }
    },  
    {  
      type: 'Pawesome',
      data: {  
        url: 'https://images.pexels.com/photos/97082/weimaraner-puppy-dog-snout-97082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
        content: {  
          name: 'Sammy',  
          about: 'Snuggly cloud borker'  
        }  
       }
    },  
    {  
      type: 'Pawesome',
      data: {  
        url: 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
        content: {  
          name: 'Pittunia',  
          about: 'Maximum adorable shooberino'  
        }  
      } 
    },  
    {  
      type: 'Pawesome',
        data: {  
          url: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
          content: {  
            name: 'Bay',  
            about: 'Long snoot for pats'  
          }  
        } 
    },  
    {  
      type: 'Smiley',
      data: {  
        url: 'https://images.pexels.com/photos/2168831/pexels-photo-2168831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'  
      }  
    },  
    {  
      type: 'Smiley',
      data: {  
        url: 'https://cdn.pixabay.com/photo/2017/06/17/13/11/axolotl-2412189_960_720.jpg'  
      }  
   }  
  ];

  private departmentMapping: Map<number, MessageType[]> = new Map<number, MessageType[]>();  
  
  constructor() {  
    this.departmentMapping.set(1, ['Smiley']);  
    this.departmentMapping.set(2, ['Pawesome', 'Clawesome']);  
  }

  public getMessages(department: number): MessageItem[] {  
    const messageTypes = this.departmentMapping.get(department) ?? [];  
    return this.messages.filter(m => messageTypes.includes(m.type));  
  }
}
