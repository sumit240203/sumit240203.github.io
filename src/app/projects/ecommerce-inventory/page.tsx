import Link from "next/link";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";

export default function EcommerceInventoryPage() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/projects/"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              ← All projects
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Home
            </Link>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            E-Commerce Inventory Database
          </h1>
          <p className="mt-3 max-w-3xl text-base text-slate-300">
            Normalized relational database for high-volume retail inventory tracking. Designed for
            correctness and query performance — normalized to 3NF with stored procedures and a
            deliberate indexing strategy.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Card>
              <div className="text-xs uppercase tracking-widest text-slate-400">What it does</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Tracks products, categories, suppliers, orders, and real-time stock levels</li>
                <li>Sales tracking with order line items and revenue rollups</li>
                <li>Stock management: incoming stock, deductions on sale, low-stock alerts via queries</li>
                <li>Report generation via stored procedures (daily sales, top products, restock needs)</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs uppercase tracking-widest text-slate-400">Stack</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["MySQL", "SQL", "Joins & Subqueries", "Stored Procedures", "Indexing", "Normalization"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-widest text-slate-400">Role</div>
                <div className="mt-2 text-sm text-slate-300">Database Architect</div>
              </div>
            </Card>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Card>
              <div className="text-xs uppercase tracking-widest text-slate-400">Normalization decisions</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>1NF: atomic values throughout — no multi-valued columns</li>
                <li>2NF: removed partial dependencies (e.g. product name separated from order lines)</li>
                <li>3NF: eliminated transitive dependencies (supplier info in its own table, not on product)</li>
                <li>Junction tables for many-to-many relationships (orders ↔ products)</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs uppercase tracking-widest text-slate-400">Indexing strategy</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Primary keys on all tables (auto-increment)</li>
                <li>Foreign key indexes to speed up joins between orders, products, and suppliers</li>
                <li>Composite index on order_items (order_id, product_id) for frequent lookups</li>
                <li>Index on stock_level for low-stock threshold queries</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs uppercase tracking-widest text-slate-400">Stored procedures</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li><code className="text-emerald-300">GenerateDailySalesReport(date)</code> — revenue and units sold per product</li>
                <li><code className="text-emerald-300">GetLowStockItems(threshold)</code> — products below reorder point</li>
                <li><code className="text-emerald-300">UpdateStockOnOrder(order_id)</code> — deducts stock atomically when order is placed</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs uppercase tracking-widest text-slate-400">Key SQL patterns used</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Multi-table JOINs for order detail views</li>
                <li>Correlated subqueries for per-product sales summaries</li>
                <li>Aggregate functions (SUM, COUNT, AVG) in reporting queries</li>
                <li>Transactions to keep stock counts consistent on order insert</li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
