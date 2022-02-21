const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [{
      name:'Melisa Demir',
      position : 'Pazarlama',
      photo:'https://randomuser.me/api/portraits/women/2.jpg',
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper venenatis metus nec rutrum. Suspendisse accumsan enim et libero placerat pellentesque. Pellentesque a venenatis sem. Sed cursus laoreet porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum mi nisl, ultrices ac consectetur eget, ultricies vitae dolor. ",
},
{
    name:'Ahmet Öztürk',
    position : 'Yazılım Geliştirme',
    photo:'https://randomuser.me/api/portraits/men/10.jpg',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper venenatis metus nec rutrum. Suspendisse accumsan enim et libero placerat pellentesque. Pellentesque a venenatis sem. Sed cursus laoreet porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada, nisi ac pulvinar faucibus, odio nibh tristique enim, id tristique sapien est quis turpis. Donec dui elit, aliquet quis libero vel, tempus volutpat quam. Sed nulla nisl, viverra quis risus id, vehicula iaculis ante. ",
},
{
    name:'Furkan Ak',
    position : 'Takım Lideri',
    photo:'https://randomuser.me/api/portraits/men/42.jpg',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, mi quis tincidunt semper, lorem justo volutpat tortor, quis mollis neque quam vel libero. Aliquam et dolor porttitor, eleifend risus ac, dapibus nunc. Aenean pellentesque pretium nulla sed pretium. Maecenas ut fringilla lacus. Phasellus eu nunc non velit fermentum rhoncus. Fusce ultrices ex eget ipsum varius suscipit. Nam condimentum elementum mi, id pellentesque justo scelerisque bibendum. Morbi sed sapien in lorem aliquam.",
},
{
    name:'Ece Duman',
    position : 'İnsan Kaynakları',
    photo:'https://randomuser.me/api/portraits/women/32.jpg',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare diam molestie interdum placerat. Cras laoreet lobortis quam, nec tempus urna pharetra vitae. Vestibulum vestibulum ex eget felis maximus, sit amet commodo mauris bibendum. Morbi lorem massa, venenatis id dolor id, maximus efficitur risus. Sed pretium ullamcorper tortor, nec ultrices elit iaculis.",
},
{
    name:'Ali Elmas',
    position : 'Yazılım Geliştirme',
    photo:'https://randomuser.me/api/portraits/men/14.jpg',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dolor vitae condimentum laoreet. Aliquam consectetur sem nibh, in venenatis lacus malesuada ut. Donec sodales et sapien sit amet commodo. Nullam ornare hendrerit pharetra. Suspendisse consequat elit ac ex maximus consectetur. Praesent sit amet imperdiet nunc. Maecenas posuere faucibus eros, vel euismod nibh aliquet et. Integer sit amet dolor in libero malesuada elementum. Etiam imperdiet.",
},
]
let idx=1

function updateTestimonial () {
 const {name,position,photo,text} =testimonials[idx]

 testimonial.innerHTML = text
 userImage.src=photo
 username.innerHTML = name
 role.innerHTML= position

 idx++
 if(idx > testimonials.length - 1){
     idx=0

 }
}
setInterval(updateTestimonial,10000)