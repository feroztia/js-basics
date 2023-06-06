/*
const arr = [20, 40, 60];
arr[0]
    OUTPUT 20   
 
                        EXAMPLE 1
const blogPosts = [
    {
        title: 'What is JavaScript?',
        author: 'Zach Gollwitzer',
        publishDate: 'Dec 20, 2020',
        content: 'some post content here'
    },
    {
        title: 'How do Arrays work?',
        author: 'Zach Gollwitzer',
        publishDate: 'Jan 1, 2021',
        content: 'some post content here'
    },
    {
        title: 'How long does it take to learn coding?',
        author: 'Zach Gollwitzer',
        publishDate: 'Jan 20, 2021',
        content: 'some post content here'
    }
]

for (let i = 0; i < blogPosts.length; i++) {
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;

    console.log(postTitle);
    console.log(postAuthor);
    console.log(postDate);
    console.log(postContent);
}

    OUTPUT 
    What is JavaScript? 
    Zach Gollwitzer 
    Dec 20, 2020 
    some post content here 
    How do Arrays work?
    Zach Gollwitzer
    Jan 1, 2021 
    some post content here 
    How long does it take to learn coding? 
    Zach Gollwitzer
    Jan 20, 2021 
    some post content here

                        EXAMPLE 2
for (let i = 0; i < 100; i++) {
    console.log(i);
}


                        EXAMPLE 3
const arr = ['jnejklmsd', 'rfesdzx', 'fesdz', 'nhtbgfvd', 'gerc66754f', 20, 40, 50]
for (let i = 0; i < arr.length(); i++) {
    if (typeof arr[i] === 'number') {
        console.log(arr[i]);
    }
}
