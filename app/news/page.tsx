import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  const articles = [
    {
      id: 1,
      title: "Major Tournament Announcement",
      excerpt: "Exciting news about the upcoming championship tournament...",
      author: "John Doe",
      date: "2024-01-15",
      status: "Published",
      views: 1250,
    },
    {
      id: 2,
      title: "New Player Transfers",
      excerpt: "Latest updates on player transfers and team changes...",
      author: "Jane Smith",
      date: "2024-01-14",
      status: "Draft",
      views: 0,
    },
    {
      id: 3,
      title: "Season Highlights",
      excerpt: "A comprehensive review of this season's best moments...",
      author: "Bob Johnson",
      date: "2024-01-13",
      status: "Published",
      views: 890,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">News and Articles</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Article
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{article.title}</CardTitle>
                <Badge variant={article.status === "Published" ? "default" : "secondary"}>{article.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>By {article.author}</span>
                <span>{article.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{article.views} views</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
