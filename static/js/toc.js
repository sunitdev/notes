// Requires bootstrap treeview - https://github.com/jonmiles/bootstrap-treeview

const TOC = function(target){

    const rootNode = {
        'type': 'H0', //HO is invalid html header
        'text': 'Table of Content',
        'nodes': []
    };

    const recentNodes = {
        'H0': rootNode
    };

    function getNavigationTree(){

        // Assuming H1 H2 H3 H4 H5 H6 will be in sequence
        $('h1, h2, h3, h4, h5, h6').each(function(index, value){

            const currentNode = getNodeFromHeader($(value));
            const parentNode = getParentNode(currentNode);

            if (!parentNode['nodes']){
                parentNode['nodes'] = [];
            }
            parentNode.nodes.push(currentNode);

            // Save recent node visited
            recentNodes[currentNode.type] = currentNode;

        }.bind(this));

        return rootNode;
    }

    function getNodeFromHeader(element){
        return {
            'element': element,
            'type': element.prop('tagName'),
            'text': element.text().replace(/[^\x20-\x7E]/g, ''), // Remove non printable chars
        }
    }

    function getParentNode(node){
        // Return most recent parent of the node
        return recentNodes['H' + (node.type.replace('H','') - 1)];
    }

    function navigateToNode(node){
        if(!node.element){
            return;
        }

        // Scroll to anchor
        $('html,body').animate({scrollTop: node.element.offset().top},'slow');
    }

    // Create TOC tree
    $(target).treeview({
        data: [getNavigationTree()],

        collapseIcon: 'glyphicon glyphicon-chevron-up',
        expandIcon: 'glyphicon glyphicon-chevron-right',
        emptyIcon: null,

        highlightSelected: false,

        nodeExpanded(event, node){
            // Render mathjax
            MathJax.Hub.Queue(['Typeset', MathJax.Hub, target]);
        }

        nodeCollapsed(event, node){
            // Render mathjax
            MathJax.Hub.Queue(['Typeset', MathJax.Hub, target]);
        }

        onNodeSelected(event, node){
            navigateToNode(node);
        }
    });

    // By deafult everythoing is collapsed
    $(target).treeview('collapseAll', { silent: true });

}
