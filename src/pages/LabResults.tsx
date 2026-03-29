import Layout from "@/components/Layout";

const LabResults = () => {
  return (
    <Layout>
      <div className="bg-frost border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <h1 className="text-lg font-heading font-bold text-primary tracking-wider uppercase">Lab Results</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-card border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="border-b border-border pb-3 mb-3">
                <p className="text-[10px] font-heading font-bold tracking-widest text-secondary uppercase">Test Report</p>
                <p className="text-[10px] font-heading tracking-wider text-muted-foreground mt-1">JANOSHIK ANALYTICAL</p>
              </div>

              {/* Fields */}
              <div className="space-y-2 text-[11px] font-body">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Task Number:</span>
                  <span className="text-foreground">—</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Client:</span>
                  <span className="text-foreground font-medium">Summit BioLabs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sample:</span>
                  <span className="text-foreground">—</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Manufacturer:</span>
                  <span className="text-foreground font-medium">Summit BioLabs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Batch:</span>
                  <span className="text-foreground">—</span>
                </div>
              </div>

              {/* Results */}
              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-[10px] font-heading font-bold tracking-widest text-primary uppercase mb-2">Results</p>
                <div className="space-y-1 text-[11px] font-body">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Content:</span>
                    <span className="text-foreground">—</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Purity:</span>
                    <span className="text-foreground">—</span>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-4 pt-3 border-t border-border">
                <div className="h-8 border-b border-dashed border-border" />
                <p className="text-[9px] text-muted-foreground mt-1 font-body">Authorized Signature</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LabResults;
