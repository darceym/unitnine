const markdown =(data, color)=>{
    const res = data.data
    return `# <span style='color: ${color}'>${res.name}</span>  
![profileImg](https://avatars3.githubusercontent.com/u/${res.id}?v=4)  
Bio: ${res.bio}  
Repo URL: [${res.name}'s repo](${res.html_url})    
Number of Followers: ${res.followers}  
Number of people ${res.name} follows: ${res.following}  
Location: ${res.location}

`
}

module.exports = markdown