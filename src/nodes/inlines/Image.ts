import { Node } from "../../node"
import * as Nodes from "../../nodes"

export class Image extends Nodes.Inline {
  kind = "Image"

  title: string
  href: string
  children: Array<Node>

  constructor(options: { title: string; href: string; children: Array<Node> }) {
    super()
    this.title = options.title
    this.href = options.href
    this.children = options.children
  }

  json() {
    return {
      kind: this.kind,
      title: this.title,
      href: this.href,
      children: this.children.map((child) => child.json()),
    }
  }

  format(): string {
    const text = this.children.map((child) => child.format()).join("")
    if (this.title) {
      return `![${text}](${this.href} "${this.title}")`
    } else {
      return `![${text}](${this.href})`
    }
  }
}
