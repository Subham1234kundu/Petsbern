"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";

type Blog = {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  image_url: string;
  content: string;
  created_at?: string;
};

const EMPTY_FORM = {
  title: "",
  category: "Pet Care",
  author: "",
  date: new Date().toISOString().split("T")[0],
  image_url: "",
  content: "",
};

export default function AddBlogsPage() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await supabase.from("blogs").select("*").order("id", { ascending: false });
      if (data) setBlogs(data);
    };
    fetchBlogs();

    const channel = supabase
      .channel("blogs-admin")
      .on("postgres_changes", { event: "*", schema: "public", table: "blogs" }, (payload) => {
        if (payload.eventType === "INSERT") setBlogs((p) => [payload.new as Blog, ...p]);
        else if (payload.eventType === "DELETE") setBlogs((p) => p.filter((b) => b.id !== payload.old.id));
        else if (payload.eventType === "UPDATE") setBlogs((p) => p.map((b) => (b.id === (payload.new as Blog).id ? (payload.new as Blog) : b)));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      let imageUrl = formData.image_url;

      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `blog-${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from("pet-images").upload(fileName, imageFile);
        if (uploadError) throw uploadError;
        const { data: { publicUrl } } = supabase.storage.from("pet-images").getPublicUrl(fileName);
        imageUrl = publicUrl;
      }

      const slug = generateSlug(formData.title);
      const dateFormatted = new Date(formData.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

      const { error } = await supabase.from("blogs").insert([{
        title: formData.title,
        slug,
        category: formData.category,
        author: formData.author,
        date: dateFormatted,
        image_url: imageUrl,
        content: formData.content,
      }]);

      if (error) throw error;

      setSuccessMsg(`Blog "${formData.title}" published!`);
      setFormData(EMPTY_FORM);
      setImageFile(null);
      setImagePreview("");
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to publish blog.");
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase.from("blogs").delete().eq("id", id);
    if (error) setErrorMsg("Failed to delete blog.");
  };

  // Simple toolbar actions for the content editor
  const insertMarkdown = (prefix: string, suffix: string = "") => {
    const textarea = document.getElementById("blogContent") as HTMLTextAreaElement;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = formData.content.substring(start, end);
    const newText = formData.content.substring(0, start) + prefix + selected + suffix + formData.content.substring(end);
    setFormData((prev) => ({ ...prev, content: newText }));
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + selected.length);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-black text-[#111] uppercase tracking-tight">Blog Writer</h1>
          <p className="text-gray-500 mt-1">Write and publish blog posts in real-time.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Writer — 2 cols */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            {successMsg && <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm font-medium">✅ {successMsg}</div>}
            {errorMsg && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm font-medium">❌ {errorMsg}</div>}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Blog Title *</label>
                <input required type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. 10 Tips for New Dog Owners" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all text-lg font-semibold" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Category</label>
                  <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all appearance-none cursor-pointer">
                    <option value="Pet Care">Pet Care</option>
                    <option value="Pet Training">Pet Training</option>
                    <option value="Pet Health">Pet Health</option>
                    <option value="Pet Nutrition">Pet Nutrition</option>
                    <option value="Pet Stories">Pet Stories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Author *</label>
                  <input required type="text" name="author" value={formData.author} onChange={handleChange} placeholder="e.g. Dr. Sarah" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all" />
                </div>
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Cover Image</label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => document.getElementById("blogImageInput")?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => { e.preventDefault(); if (e.dataTransfer.files?.[0]) { const f = e.dataTransfer.files[0]; setImageFile(f); setImagePreview(URL.createObjectURL(f)); } }}
                >
                  <input id="blogImageInput" type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files?.[0]) { const f = e.target.files[0]; setImageFile(f); setImagePreview(URL.createObjectURL(f)); } }} />
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="h-32 mx-auto object-contain rounded-lg" />
                  ) : (
                    <p className="text-sm text-gray-400 py-4">Click or drag a cover image here</p>
                  )}
                </div>
                <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} placeholder="Or paste image URL..." className="w-full mt-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all" />
              </div>

              {/* Content Editor with Toolbar */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Content *</label>
                {/* Toolbar */}
                <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 border-b-0 rounded-t-lg px-2 py-1.5">
                  <button type="button" onClick={() => insertMarkdown("**", "**")} className="px-2 py-1 text-xs font-black text-gray-600 hover:bg-gray-200 rounded transition-colors" title="Bold">B</button>
                  <button type="button" onClick={() => insertMarkdown("*", "*")} className="px-2 py-1 text-xs italic text-gray-600 hover:bg-gray-200 rounded transition-colors" title="Italic">I</button>
                  <div className="w-px h-4 bg-gray-300 mx-1" />
                  <button type="button" onClick={() => insertMarkdown("## ")} className="px-2 py-1 text-xs font-bold text-gray-600 hover:bg-gray-200 rounded transition-colors" title="Heading">H2</button>
                  <button type="button" onClick={() => insertMarkdown("### ")} className="px-2 py-1 text-xs font-bold text-gray-600 hover:bg-gray-200 rounded transition-colors" title="Subheading">H3</button>
                  <div className="w-px h-4 bg-gray-300 mx-1" />
                  <button type="button" onClick={() => insertMarkdown("- ")} className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 rounded transition-colors" title="List">• List</button>
                  <button type="button" onClick={() => insertMarkdown("\n---\n")} className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 rounded transition-colors" title="Divider">— HR</button>
                </div>
                <textarea
                  id="blogContent"
                  required
                  rows={14}
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder={"Write your blog content here...\n\nUse the toolbar above for formatting.\n\n## Section Heading\n\nYour paragraph text goes here.\n\n### Sub-section\n\n- Bullet point 1\n- Bullet point 2"}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] transition-all resize-y font-mono text-sm leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !formData.title.trim() || !formData.content.trim()}
                className="w-full bg-[#111] hover:bg-[#333] text-white font-bold py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm shadow-lg"
              >
                {isLoading ? "Publishing…" : "Publish Blog Post"}
              </button>
            </form>
          </div>

          {/* Published Blogs List — 1 col */}
          <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#5B92BD]">Published</h2>
              <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                LIVE
              </div>
            </div>

            <div className="flex-1 overflow-y-auto max-h-[700px] space-y-2 custom-scrollbar">
              {blogs.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 text-gray-400 text-sm">
                  <span className="text-3xl mb-2">📝</span>
                  <p>No blogs published yet.</p>
                </div>
              ) : (
                blogs.map((blog) => (
                  <div key={blog.id} className="group p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#5B92BD] transition-all">
                    <div className="flex items-start gap-3">
                      {blog.image_url ? (
                        <img src={blog.image_url} alt={blog.title} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-lg shrink-0">📝</div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-[#111] truncate">{blog.title}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          {blog.author && <span>by {blog.author} · </span>}
                          {blog.category} · {blog.date}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="mt-2 w-full text-[10px] font-bold uppercase tracking-wider py-1.5 rounded-lg border border-red-200 text-red-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
