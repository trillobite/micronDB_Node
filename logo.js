/*
    You know... sometimes it's nice to keep things stupid simple...
*/

module.exports = {

    logo: (port, version) => {

        const logo = `


                        )
           c            (
           o        )   )
           p        (
           y    .---------------------.
           r    |        _____        |___      
           i    |     .\'\`_,-._\`\'.      __ \\
           g    |    /  ( [ ] )  \\    |  ||
           h    |   /.-\"\"\`( )\`\"\"-.\\   |  ||
           t    |  \' <\'\`\`\`(.)\`\`\`\'> \'  | _||
                |    <\'\`\`\`(.)\`\`\`\'>    |/ _/
           2    |     <\'\`\`(.)\`\`\'>      ./
           0    |      <\`\`\\_/\`\`>      |
           1    |       \`\'---\'\`       |
           9    \\github.com/trillobite/              
                  \\_________________/      Keep it black
				  



		          \`7MM\"\"\"Yb. \`7MM\"\"\"Yp, 
		            MM    \`Yb. MM    Yb 
		MM    MM    MM     \`Mb MM    dP 
		MM    MM    MM      MM MM\"\"\"bg. 
		MM    MM    MM     ,MP MM    \`Y 
		MM    MM    MM    ,dP\' MM    ,9 
		MVbgd\"\'Ybo.JMMmmmdP\' .JMMmmmd9  
		M.                              
		M8                  v${version}



        Port: ${port}
    `;

        return logo;
    }
};