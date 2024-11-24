import { text } from "stream/consumers";


const navbarData = [
    {
      id: 'aboutus',
      text: "About Us",
      subNavbar: [{
        id: 'aboutDevSamaj',
        text: "About Dev Samaj",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
        image: "https://devsamajschools.com/images/Principal.jpg"
      },
      {
        id: 'imageGallery',
        text: "Image Gallery",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsBg20mg8unoybeoxUCeJVJPqUiOy3Cx4Sg&s"
      },
      {
        id: 'videoGallery',
        text: "Video Gallery",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREe2EqdlWW7T1ds2-m1UMBXGwP8Y55XNpkcA&s"
      }]
    },
    {
      id: 'mpd',
      text: "MPD",
      subNavbar: [{
        id: 'CBSC_Mandatory_disclosure',
        text: "CBSC Mandatory disclosure",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JEPgpgSs4gnoYWpWjbdzJOmHwUREQw25CA&s"
      }]
    },
    {
      id: 'parents',
      text: "Parents",
      subNavbar:[ {
        id: 'admission',
        text: "Admission",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqBwlLEAPcbSKJA1dskIjTK-JLz0GXy8RFQ&s"
      },
      {
        id: 'facilities',
        text: "Facilities",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6xn-A9aEnc00o24uKzfZgar9C6sR9dnjeQ&s"
      },
      {
        id: 'transportation',
        text: "Transportation",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WrKp827UA5AU8txRUj5dOcFZfJjut1ICbw&s"
      }]
    },{
        id:'events',
        text: "Events",
        subNavbar:[{
            id: 'upcomingEvents',
            text: "Upcoming Events",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ_7MC8Fl_xC8L93ouryMuOm0p4U3s7jAUA&s"
        },
        {
            id: 'pastEvents',
            text: "Past Events",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc",
            image: "https://5.imimg.com/data5/PS/AK/UO/SELLER-1469653/school-and-college-events.jpg"
        }]
    },{
        id:'contactus',
        text: "Contact Us",
        subNavbar:null
    },{
        id:'registration',
        text: "Registration",
        subNavbar:[
            {
                id:'criteria',
                text: "Criteria",
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc',
                image:'https://www.gbtps.org/wp-content/uploads/2023/01/3fe01aca-29a7-4b2a-8fb2-c8bf843f7c35.png'
            },{
                id:'registrationForm',
                text: "Registration Form",
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus euismod, ultricies mi nec, tincidunt nunc',
                image:'https://3.files.edl.io/1e3b/19/08/15/173429-2b6a26a0-be1e-4139-9333-1c4f81c30b8d.png'
            }
        ]
    },{
        id:'history',
        text: "History",
        subNavbar:null
    },{
        id:'login',
        text: "Login",
        subNavbar:null
    }

  ];
  


  export default navbarData;