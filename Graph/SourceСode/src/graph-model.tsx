export interface Node {
  label: string;
  pos: number[];
  color: string;
}
export interface Link {
  from: number;
  to: number;
}

/**
 * Размер прямоугольника
 */
const setting = {
  RectW: 50,
  RectH: 30
};

export class GraphModel {
  private AllNodes: Node[];
  private AllLink: Link[];
  private SelectedElement: Node;

  setSelectedElement(node: Node) {
    this.SelectedElement = node;
  }
  getSelectedElement() {
    return this.SelectedElement;
  }
  deleteSelectedElement() {
    delete this.SelectedElement;
  }

  checkClick(mousePos: { x: number; y: number }) {
    const allNodes = this.getNodes();
    return allNodes.find(node => {
      if (
        mousePos.x > node.pos[0] - setting.RectW / 2 &&
        mousePos.x < node.pos[0] + setting.RectW / 2 &&
        mousePos.y > node.pos[1] - setting.RectH / 2 &&
        mousePos.y < node.pos[1] + setting.RectH / 2
      ) {
        return true;
      }
      return false;
    });
  }

  changeNode(index: number, node: Node) {
    this.AllNodes[index] = node;
  }

  // должен вернуть массив всех связей узлов
  getLinks(): Link[] {
    return this.AllLink;
  }
  // должен возвращать массив всех узлов
  getNodes(): Node[] {
    return this.AllNodes;
  }
  // при вызове контрол GraphView должен начать отображать переданные узлы и связи
  setNodesAndLinks(nodes: Node[], links: Link[]) {
    this.AllNodes = nodes;
    this.AllLink = links;
  }
}
