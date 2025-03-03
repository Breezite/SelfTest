function Comment(user, body)
{
    this.user = user;
    this.body = body;
}

/*
let Post =
{
    title: '',
    views: 0,
    coms: new Array(5),

    set Comments(coms)
    {
        coms[0] = coms;
    }
}*/


function Post(title, views, coms)
{
    this.title = title;
    this.views = views;
    this.coms = new Array(5);

    this.getComs = function()
    {
        return this.coms;
    },
    
    /*this.setComs = function(newC)
    {
        for(let i = 0; i < coms.length; i++)
        {
            if(!(typeof(coms[i]) == 'number'))
            {
                this.coms[i] = newC;
            }
        }
    }*/
}

function setComments(Ments, newC)
{
    Ments[0] = newC;
    return Ments;
}
/*
function setComment(newC)
{
    this.coms[0] = newC;
}
function getComments()
{
    for(let i = 0; i < this.coms.length; i++)
    {
        console.log(this.coms[i]);
    }
}
*/

let p1 = new Post('Movie', 5, []);
console.log(p1);
p1.coms = p1.setComments(p1.getComs(), 'Lol');
console.log(p1.getComs());